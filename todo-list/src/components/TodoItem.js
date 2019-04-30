import React, {Component} from 'react';
const todoInput = {
    width: '50%'
};
class TodoItem extends Component {
    render() {
        return(
            <div>
                <input style={todoInput} type="text" placeholder="type here what do you want to do ...">
                </input>
            </div>
        );
    }
}

export default TodoItem;

