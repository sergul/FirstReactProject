import React, { Component } from 'react';

class EditPage extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <p>Editing the expense with id of {this.props.match.params.id}</p>
            </div>
        );
    }
}

export { EditPage };