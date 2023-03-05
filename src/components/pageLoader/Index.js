import React from "react";

const PageLoader = (loadingMsg) => {
    return(
        <div className="d-flex justify-content-center maxHeightContent align-items-center">
            <div className="spinner-border text-dark mx-2" role="status">
            </div>
                <span className="sr-only">Przetwarzanie danych...</span>
        </div>
    );
};

export default PageLoader