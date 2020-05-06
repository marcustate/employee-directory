import React from "react";

function Card(props) {
    return
    (
            <tr>
                <th scope="row"><img alt={props.firstName} src={props.picture} /> </th>
                <td > {props.firstName}</td>
                <td > {props.lastName}</td>
                <td > {props.emailName}</td>
            </tr>       
    )
}

export default Card;