import React from "react";
import { Modal } from "react-bootstrap";

const ModalHeader = ({title}) => {
    return(
        <Modal.Header closeButton>  
            <Modal.Title id="sign-in-title">  
                {title}
            </Modal.Title> 
        </Modal.Header>
    );
};

export default ModalHeader