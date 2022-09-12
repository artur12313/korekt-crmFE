import axios from 'axios';
import React, { Component, Fragment } from 'react';  
import { Modal } from 'react-bootstrap';  
  
class ModalPopup extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            showModal: false,
            name: '',
            email: '',
            phone: '',
            password: '',
            passwordConfirm: '',
            msg: '',
            msgErr: '',
        };  
    }  
  
    isShowModal = (status) => {  
        this.handleClose();  
        this.setState({ showModal: status });  
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        document.getElementById('phone').addEventListener('input', function (e) {
            var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})/);
            e.target.value = !x[2] ? x[1] :  x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '');
        });
    }
  
    handleClose = () => {  
        this.props.onPopupClose(false);  
    }
    
    newUser = async (e) => {
        e.preventDefault();
        
        if(this.state.password === this.state.passwordConfirm)
        {
            axios.post('http://127.0.0.1:8000/api/users/new', {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                password: this.state.password,
                passwordConfirm: this.state.passwordConfirm,
            }).then((response) => {
                if(response.data.status === 200)
                {
                    this.setState({
                        msg: response.data.message,
                    });
                }
            })
        }else{
            this.setState({
                msgErr: 'Podane hasła są różne'
            });
            setTimeout(() => {
                this.setState({msgErr: ''});
            }, 2000);
        }
    }
  
    render() {
        return (  
            <Fragment>  
                <Modal show={this.props.showModalPopup} onHide={this.handleClose}  
                    size="lg"  
                    aria-labelledby="contained-modal-title-vcenter"  
                    centered  
                >  
                    <Modal.Header closeButton>  
                        <Modal.Title id="sign-in-title">  
                            Dodaj nowego użytkownika
                         </Modal.Title> 
                    </Modal.Header>
                     {this.state.msg ?
                        (<div className="alert alert-success">{this.state.msg}</div>
                        ) : (
                            <div></div>
                        )}
                        {this.state.msgErr ?
                        (<div className="alert alert-danger">{this.state.msgErr}</div>
                        ) : (
                            <div></div>
                        )}
                        <form onSubmit={this.newUser}>
                    <Modal.Body>  
                            <div className="form-group col-md-6 mb-4">
                                <label>Nazwa:</label>
                                <input type="text" name="name" onChange={this.handleInput} className="form-control"></input>
                            </div>
                            <div className="form-group col-md-6 mb-4">
                                <label>Email:</label>
                                <input type="text" name="email" onChange={this.handleInput} className="form-control"></input>
                            </div>
                            <div className="form-group col-md-6 mb-4">
                                <label>Telefon:</label>
                                <input type="text" name="phone" id="phone" onChange={this.handleInput} className="form-control"></input>
                            </div>
                            <div className="form-group col-md-6 mb-4">
                                <label>Hasło:</label>
                                <input type="password" name="password" onChange={this.handleInput} className="form-control"></input>
                            </div>
                            <div className="form-group col-md-6 mb-4">
                                <label>Powtórz hasło:</label>
                                <input type="password" name="passwordConfirm" onChange={this.handleInput} className="form-control"></input>
                            </div>
                    </Modal.Body>  
                    <Modal.Footer>
                    <div className="signUp">  
                        <button type="button" className="btn btn-light text-dark" onClick={() => this.isShowModal(true)}>Zamknij</button>
                        <button type="submit" className="btn btn-primary" onClick={() => setTimeout(() => {this.isShowModal(true)}, 2000)}>Zapisz</button>
                    </div>  
                    </Modal.Footer>
                    </form>
                </Modal >  
            </Fragment >  
  
        );
    }  
}  
  
export default (ModalPopup);