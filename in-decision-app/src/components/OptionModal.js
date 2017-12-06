import React, { Component } from 'react';
import Modal from 'react-modal';

class OptionModal extends Component {
    
    state = {
        selectedOption: undefined
    };

    onClose = () => {
        this.setState({selectedOption: undefined});
    }

    componentWillReceiveProps(newProps) {
        if (this.state.selectedOption !== newProps.selectedOption) {
            this.setState({selectedOption: newProps.selectedOption});
        }
    }

    render () {
        return (
        <Modal
            isOpen={!!this.state.selectedOption}
            contentLabel="Selected Option"
            onRequestClose={ this.onClose }
            closeTimeoutMS={200}
            className="modal">
            <h3 className="modal__title">Selected Option</h3>
            { this.state.selectedOption && <p className="modal__body">{ this.state.selectedOption}</p> }
            <button className="button" onClick={ this.onClose }>Okay</button>
        </Modal>
        );
    }
};

export { OptionModal };