import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

/**
 * Represents the UI for typing and searching weather data of a desired city
 */

const SearchBar = (props) => {

    const onChangeHandler = (e) => {
        e.preventDefault();
        props.onSearchTextChangeCallback(e.target.value);
    }

    return(
        <div className="search-bar-container">
            <div className="search-icon" onClick={props.onSearchClick}>
                <i className="fa fa-search"></i>
            </div>
            <div className="search-input-container">
                <input className="search-box" value={props.inputText} onChange={onChangeHandler}/>
            </div>
            <div className="search-icon" onClick={props.onRemoveClick}>
                <i className="fa fa-times"></i>
            </div>
        </div>
    );
}

export { SearchBar };