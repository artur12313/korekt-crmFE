import axios from "axios";
import {Component, Fragment} from "react";
// import { Link } from "react-router-dom";
import ModalPopup from "./Create";

class Users extends Component
{
    constructor(props){
        super(props);
        this.state = {
            msg: '',
            msgErr: '',
            count: 1,
            isLoading: true,
            users: [],
            showModalPopup: false
        }
    }

    isShowPopup = (status) => {  
        this.setState({ showModalPopup: status });  
    };  

    componentDidMount = async () => {
        axios.get('http://127.0.0.1:8000/api/users')
            .then((response) => {
                if(response.data.status === 200)
                {
                    this.setState({
                        users: response.data.users,
                    })
                    setTimeout(() => {
                        this.setState({
                            isLoading: false
                        })
                    }, 1000)
                    console.log(response.data.users)
                }
            }).catch((error) => {
                console.log(error.response);
                this.setState({
                    msgErr: 'Błąd pobierania danych!',
                    isLoading: false
                });
            })
    }

    render(){
        const isLoading = this.state.isLoading;
        var count = this.state.count;
        return(
            <div onLoad={this.componentDidMount}>
                {isLoading ? (
                    <div className="d-flex justify-content-center maxHeightContent align-items-center">
                    <div className="spinner-border text-dark mx-2" role="status">
                    </div>
                        <span className="sr-only">Wczytywanie...</span>
                </div>
                ) : (
                    <div>
                        <div className="d-flex justify-content-between align-items-center p-4">
                        <h1>Lista użytkowników</h1>
                        <Fragment>  
                            <Fragment>  
                                <div onClick={() => this.isShowPopup(true)}>  
                                    <button className="btn btn-primary">Nowy użytkownik</button>  
                                </div>  
                            </Fragment>  
                            <ModalPopup  
                                showModalPopup={this.state.showModalPopup}  
                                onPopupClose={this.isShowPopup}  
                                ></ModalPopup>  
                        </Fragment>  
                        </div>
                        {this.state.users.length > 0 ? (<div>
                            <table className="table table-striped table-bordered" id="table">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nazwa</th>
                            <th scope="col">Email</th>
                            <th scope="col">Tel.</th>
                            <th scope="col">Rola</th>
                            <th scope="col">Data utworzenia</th>
                            <th scope="col" className="text-center">Narzędzia</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((user) => (
                                <tr key={user.id}>
                                    <td>{count++}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td><span className="badge badge-primary">{user.role}</span></td>
                                    <td>{user.created_at}</td>
                                    <td className="d-flex justify-content-center">
                                        <button type="button" className="btn btn-primary btn-sm mx-2" data-toggle="modal" data-target="#edit">Edytuj</button>
                                        <button type="button" className="btn btn-danger btn-sm">Usuń</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                        </div>
                            ) : (<div className="alert alert-info">Brak użytkowników</div>)}
                    </div>
                )}
            </div>
        )
    }
}
export default Users;