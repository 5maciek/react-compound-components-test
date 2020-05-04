import React, { useContext } from 'react';
import { modalContext } from "./ModalContext";

function ModalHeader({title = "title"}) {
    const { handleToggle } = useContext(modalContext);

    function closeModal() {
        handleToggle(false);
    }

    return (
        <header>
            <p>{title}</p>
            <button onClick={closeModal}>close</button>
        </header>
    );
}

export default ModalHeader;
