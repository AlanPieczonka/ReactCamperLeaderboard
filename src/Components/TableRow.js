import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, Label, Input } from 'reactstrap';

import customTableRow from './../css/ComponentsStyles/customTableRow.css';

export const TableRow = (props) =>{
    return(
     <tr>
        <th scope="row">{props.index + 1}</th>
        <td>{props.username}</td>
        <td><img src={props.profilepicture} className="profilePicture" alt="Camper Profile Picture"/></td>
        <th>{props.monthpoints}</th>
        <th>{props.allpoints}</th>
      </tr>
    );
};