function Login() {
        return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Witaj!</h4>
                            <hr />
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-3">
                                    <label>E-mail:</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Hasło:</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <hr />
                                <button type="submit" className="btn btn-primary">Zaloguj</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}
export default Login;