import axios from "axios";
import { Component } from "react";

class Categories extends Component
{
    constructor(props){
        super(props);
        this.state = {
            msg: '',
            msgErr: '',
            count: 1,
            isLoading: true,
            categories: []
        }
    }

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
                <tr>
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
    </table>)}        
            </div>
        );
    }
}
export default Categories;