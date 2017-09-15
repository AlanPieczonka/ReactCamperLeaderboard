import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, Label, Input } from 'reactstrap';

export const TableRow = (props) =>{
    return(
     <tr>
        <th scope="row">key</th>
        <td>{props.username}</td>
        <td>Img tag</td>
        <th>2343</th>
        <th>2342</th>
      </tr>
    );
};