import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Container, Table } from 'reactstrap';

export const TableHead = () =>{
    return(
      <thead>
        <tr>
          <th>#</th>
          <th>Camper Name</th>
          <th>Profile picture</th>
          <th>Points in 30 days</th>
          <th>All time points</th>
        </tr>
      </thead>
    );
};