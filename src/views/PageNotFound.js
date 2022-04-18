import { Component } from 'react';
import {Link} from 'react-router-dom';
import error from '../images/404.png';

class PageNotFound extends Component
{
    render() {
        return(
            <div className="Container">
                <div className="align-items-center error-page d-flex justify-content-center">
                    <div>
                    <img src={error} alt="error" width="200" height="200" />
                    </div>
                    <div>
                    <h1 className="text-center">404</h1>
                    <p>Strona której szukasz nie istnieje!</p>
                    <Link className="btn btn-primary d-flex text-center  justify-content-center" to="/dashboard">
                        Powrót do strony głównej
                    </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageNotFound;