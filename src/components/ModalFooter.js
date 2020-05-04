import React, { useContext } from 'react';
import { modalContext } from "./ModalContext";

function ModalFooter({callToActionLabel}) {
    const { handleToggle } = useContext(modalContext);

    function closeModal() {               
        handleToggle(false);
    }
    function showAlert(){
        alert('Ok');
    }
    return (
        <footer>            
            <button onClick={closeModal}>Cancel</button>
            <button onClick={() => { showAlert(); closeModal() }}>{callToActionLabel}</button>
        </footer>
    );
}

export default ModalFooter;
