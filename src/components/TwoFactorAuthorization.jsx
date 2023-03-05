

function TwoFactorAuthorization()
{
        return(
            <div className="TwoFactorAuthorization d-flex mt-3 justify-content-around">
                <div className="col-md-7 p-2 info">
                    <h3>Autoryzacja dwuskładniowa</h3>
                    <p>Dodaj dodatkowe zabezpieczenia do swojego konta, korzystając z autoryzacji dwuskładnikowej</p>
                </div>
                <div className="col-md-9 box p-4">
                    <h3>Masz wyłączoną Autoryzacje dwuskładniową</h3>
                    <p>Gdy włączona jest autoryzacja dwuskładnikowa, 
                        podczas uwierzytelniania zostanie wyświetlony monit o bezpieczny, losowy token. 
                        Możesz pobrać ten token z aplikacji Google Authenticator na swoim telefonie.</p>
                </div>
            </div>
        );
}

export default TwoFactorAuthorization