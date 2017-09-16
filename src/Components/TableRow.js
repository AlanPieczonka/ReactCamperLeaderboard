import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, Label, Input } from 'reactstrap';

export const TableRow = (props) =>{
    return(
     <tr>
        <th scope="row">{props.index + 1}</th>
        <td>{props.username}</td>
        <td>Img tag</td>
        <th>{props.monthpoints}</th>
        <th>{props.allpoints}</th>
      </tr>
    );
};