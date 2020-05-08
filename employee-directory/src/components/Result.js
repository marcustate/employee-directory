import React from "react";

function Result(props) {
    return
    (
        <table className="table">
            {props.results.map(result => (
                <table style="width:80%">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>

                <tr>
                    <td>Marcus Tate</td>
                    <td>Tate</td>
                    <td>29</td>
                </tr>
                </table>
        ))}
        </table>
    );
}

export default Result;