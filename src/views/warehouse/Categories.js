import { Component } from "react";

class Categories extends Component
{
    render()
    {
        return(
            <div>
                <table className="table table-striped table-bordered" id="table">
        <thead className="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nazwa</th>
            <th scope="col" className="text-center">Narzędzia</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>iteration</td>
                <td>name</td>
                <td className="d-flex justify-content-center">
                    <button type="button" className="btn btn-secondary btn-sm">Pokaż</button>
                    <button type="button" className="btn btn-primary btn-sm mx-2" data-toggle="modal" data-target="#edit">Edytuj</button>
                    <button type="button" className="btn btn-danger btn-sm">Usuń</button>
                </td>
            </tr>
        </tbody>
    </table>
            </div>
        );
    }
}
export default Categories;