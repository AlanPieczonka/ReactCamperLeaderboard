import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Table } from 'reactstrap';

import  SelectInput  from './SelectInput';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: '30days',
      days: 0 
  };

  }
  componentDidMount() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(resp => resp.json())
      .then((data) =>  {
        this.setState({ days: data });
      });

    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(resp => resp.json())
      .then(function(data) {
        return console.log(data);
      });
  }



  render() {
    return (
      <Container>
        <SelectInput test="gohagoha3zl"/>
        <Table>
          <TableHead />
          <tbody>
            <TableRow />
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Main;
