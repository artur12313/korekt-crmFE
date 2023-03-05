import axios from 'axios';
import React, { Component, Fragment } from 'react';  
import { Modal } from 'react-bootstrap';  
  
class ModalPopup extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            showModal: false,
            name: '',
            msg: '',
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
    }
  
    handleClose = () => {  
        this.props.onPopupClose(false);  
    }
    
    newCategory = async (e) => {
        e.preventDefault();
        
        axios.post('http://127.0.0.1:8000/api/category/new', {
            name: this.state.name,
        }).then((response) => {
            if(response.data.status === 200)
            {
                this.setState({
                    msg: response.data.message,
                });
            }
        })
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
                            Dodaj nową kategorie
                         </Modal.Title> 
                    </Modal.Header>
                     {this.state.msg ?
                        (<div className="alert alert-success">{this.state.msg}</div>
                        ) : (
                            <div></div>
                        )}
                        <form onSubmit={this.newCategory}>
                    <Modal.Body>  
                            <div className="form-group col-md-6 mb-4">
                                <label>Nazwa:</label>
                                <input type="text" name="name" onChange={this.handleInput} className="form-control"></input>
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