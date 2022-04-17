import axios from "axios";
import { Component } from "react";
import { Link, Navigate} from 'react-router-dom';
import '../../style.scss';
import logo from '../../images/korekt-logo.png';
import Stars from "../../components/Stars";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading: false,
            errMsgEmail: '',
            errMsgPwd: '',
            errMsg: ''
    
        };
    }
    

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    login = async (e) => {
        e.preventDefault();
        this.setState({isLoading: true});

        await axios.post('http://127.0.0.1:8000/api/login', {
            email: this.state.email,
            password: this.state.password,
        }).then((response) => {
            this.setState({isLoading: false });
            if(response.data.status === 200)
            {
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("userData", JSON.stringify(response.data.data));
                this.setState({
                    msg: response.data.message,
                    redirect: true,
                });
            }
            if (response.data.status === "failed" && response.data.success === undefined)
            {
                this.setState({
                    errMsgEmail: response.data.validation_error.email,
                    errMsgPwd: response.data.validation_error.password,
                });
                setTimeout(() => {
                    this.setState({errMsgEmail: '', errMsgPwd: ''});
                }, 2000);
            } else if (response.data.status === 'failed' && response.data.success === false)
            {
                this.setState({errMsg: response.data.message,});
                setTimeout(() => {
                    this.setState({errMsg: ''});
                }, 2000);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        if (this.state.redirect)
        {
            return <Navigate to='/dashboard' />;
        }
        const login = localStorage.getItem('isLoggedIn');
        if (login)
        {
            return <Navigate to='/dashboard'/>;
        }
        const isLoading = this.state.isLoading;

        // const alertContent = this.state.errMsg;
        // let alert;

        // if(!alertContent){
        //     return alert = <div class="alert alert-danger" role="alert">{alertContent} asddsa</div>;
        // }

        return (
            <div className="background authPanel">
            <div className="container authContainer">
                        <div className="card">
                            <div className="card-header ">
                                <img src={logo} alt="Korekt s.c." className="img" height="54px" />
                            </div>
                            {/* {alert} */}
                            <div class="alert alert-danger" role="alert">{this.state.errMsg}</div>
                            <div className="card-body">
                                <form onSubmit={this.login}>
                                    <div className="form-group mb-3">
                                        <label>E-mail:</label>
                                        <input type="email" name="email" onChange={this.handleInput} value={this.state.email} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Hasło:</label>
                                        <input type="password" name="password" onChange={this.handleInput} value={this.state.password} className="form-control" />
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to="/register" className="link-primary">Zarejestruj się</Link>
                                        </div>
                                        <div className="col-sm d-flex justify-content-end">
                                            <button type="submit" className="btn btn-primary">Zaloguj {isLoading ? (
                                                <span className="spinner-border spinner-border-sm ml-5"
                                                role="status"
                                                aria-hidden="true"></span>
                                            ) : (
                                                <span></span>
                                            )}</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Stars />
                </div>
            );
    }     
}
// function Login() {

//     state = {
//         email: '',
//         password: ''
//     }

//     handleInput = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });

//     }

//     login = async (e) => {
//         e.preventDefault();

//         const res = await axios.post('http://127.0.0.1:8000/api/login', this.state);
//         if(res.data.status === 200)
//         {
//             console.log(res.data.message);
//         }
//     }

//         return (
//         <div className="container mt-2">
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="card">
//                         <div className="card-header">
//                             <h4>Witaj!</h4>
//                             <hr />
//                         </div>
//                         <div className="card-body">
//                             <form onSubmit={this.login}>
//                                 <div className="form-group mb-3">
//                                     <label>E-mail:</label>
//                                     <input type="email" name="email" onChange={this.handleInput} value={this.state.email} className="form-control" />
//                                 </div>
//                                 <div className="form-group mb-3">
//                                     <label>Hasło:</label>
//                                     <input type="password" name="password" onChange={this.handleInput} value={this.state.password} className="form-control" />
//                                 </div>
//                                 <hr />
//                                 <button type="submit" className="btn btn-primary">Zaloguj</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         );
// }
export default Login;