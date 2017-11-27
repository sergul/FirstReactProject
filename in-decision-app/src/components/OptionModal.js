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
            onRequestClose={ this.onClose }>
            <h3>Selected Option</h3>
            { this.state.selectedOption && <p>{ this.state.selectedOption}</p> }
            <button onClick={ this.onClose }>Okay</button>
        </Modal>
        );
    }
};

export { OptionModal };