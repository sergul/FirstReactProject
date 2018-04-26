import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>App Header</h1>
                <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
                <br/>
                <NavLink to="/expense" activeClassName="is-active">Create Expense</NavLink>
                <br/>
                <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
                <br/>
                <NavLink to="/help" activeClassName="is-active">Help</NavLink>
            </header>
        );
    }
}

export { Header };