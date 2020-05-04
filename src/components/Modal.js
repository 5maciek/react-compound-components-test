import React from 'react';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModaFooter from './ModalFooter';
import { modalContext } from "./ModalContext";

const { Provider } = modalContext;

class Modal extends React.Component {
    state = {
        isOpen: false,
    }

    handleClickOutside = (event) => {
        if (event.target.classList.value === "modal") {
            this.setState({
                isOpen: false
            })
        }
    }

    handleToggle = (isOpen) => {
        this.setState({
            isOpen
        })
    }

    render() {
        const isOpen = this.state.isOpen;
        const handleToggle = this.handleToggle;
        const openModal = this.state.isOpen;

        return (<>
            <button onClick={() => this.handleToggle(true)}>Open modal</button>
            {openModal && (
                <div className="modal" onClick={this.handleClickOutside}>
                    <div className="modalContent">
                        <Provider value={{ isOpen, handleToggle }}>{this.props.children}</Provider>
                    </div>
                </div>
            )}
        </>)
    }
}

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModaFooter;
export default Modal;