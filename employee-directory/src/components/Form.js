import React from "react";

function Form(props) {
    return
    (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for a Employee"
                    id="search"
                >/
                <button onClick={props.handleFormSubmit} className= "btn btn-default">
                Search
                </button>
            </div>
        </form>
    );
}