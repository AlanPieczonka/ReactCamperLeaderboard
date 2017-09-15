import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Table } from 'reactstrap';

import  { SelectInput }  from './SelectInput';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: '30days',
      days: 0,
      selectedDaysState: '' 
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

  componentDidUpdate(prevProps, prevState){
    console.log(this.state.selectedDaysState);
}

    handleSelect = (event) =>{
      this.setState({
        selectedDaysState: event.target.value
      });
    }



  render() {
    return (
      <Container>
        <SelectInput onChange={this.handleSelect}/>
        <Table>
          <TableHead />
          <tbody>
            <TableRow username="us"/>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Main;
