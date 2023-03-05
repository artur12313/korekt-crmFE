import axios from "axios";
import { Component, Fragment } from "react";
import ModalPopup from "../../components/modals/CategoryNew";

class Categories extends Component
{
    constructor(props){
        super(props);
        this.state = {
            msg: '',
            msgErr: '',
            count: 1,
            isLoading: true,
            categories: [],
            showModalPopup: false
        }
    }

    isShowPopup = (status) => {  
        this.setState({ showModalPopup: status });  
      };  

    componentDidMount = async () => {

        axios.get('http://127.0.0.1:8000/api/categories')
            .then((response) =>{
                if(response.data.status === 200)
                {
                    this.setState({
                        categories: response.data.categories,
                    })
                    setTimeout(() => {
                        this.setState({
                            isLoading: false
                        })
                    }, 1000)
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
        ) :(
            <div>
                <div className="d-flex justify-content-between align-items-center p-4">
                    <h1>Lista kategorii</h1>
{/* 
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#nowa">Nowa kategoria</button> */}
                    <Fragment>  
                        <Fragment>  
                            <div onClick={() => this.isShowPopup(true)}>  
                                <button className="btn btn-primary">Nowa kategoria</button>  
                            </div>  
                        </Fragment>  
                        <ModalPopup  
                        showModalPopup={this.state.showModalPopup}  
                        onPopupClose={this.isShowPopup}  
                        ></ModalPopup>  
                    </Fragment>  
                </div>
                    <table className="table table-striped table-bordered" id="table">
        <thead className="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nazwa</th>
            <th scope="col" className="text-center">Narzędzia</th>
            </tr>
        </thead>
        <tbody>
            {this.state.categories.map((category) => (
                <tr key={category.id}>
                    <td>{count++}</td>
                    <td>{category.name}</td>
                    <td className="d-flex justify-content-center">
                        <button type="button" className="btn btn-secondary btn-sm">Pokaż</button>
                        <button type="button" className="btn btn-primary btn-sm mx-2" data-toggle="modal" data-target="#edit">Edytuj</button>
                        <button type="button" className="btn btn-danger btn-sm">Usuń</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
    )}        
            </div>
        );
    }
}
export default Categories;