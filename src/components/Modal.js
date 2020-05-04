import React from 'react';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModaFooter from './ModalFooter';
import { modalContext } from "./ModalContext";

const { Provider } = modalContext;

class Modal extends React.Component {
    static Header = ModalHeader;
    static Content = ModalContent;
    static Footer = ModaFooter;

    state = {
        isOpen: false,
    }

    handleClickOutside = () => {
        this.setState({
            isOpen: false
        })
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
                    <div className="modalContent" onClick={e => e.stopPropagation()}>
                        <Provider value={{ isOpen, handleToggle }}>{this.props.children}</Provider>
                    </div>
                </div>
            )}
        </>)
    }
}



export default Modal;