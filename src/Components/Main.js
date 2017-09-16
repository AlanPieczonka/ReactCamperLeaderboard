import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Table } from 'reactstrap';

import axios from 'axios';

import  { SelectInput }  from './SelectInput';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

class Main extends Component {

    constructor(props) {
      super(props);
      this.state = {
        oneMonth: [],
        selectedDaysState: '30days' 
    };
} 

  getInitialState(){


  }
  
  componentWillMount() {

    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(({ data }) => {
      this.setState({ oneMonth: data });
      console.log(this.state.oneMonth);
      console.log(this.state.oneMonth[0]);
      console.log(this.state.oneMonth[0].username);
    })
    .catch(function (error) {
      console.log(error);
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
              {
                this.state.oneMonth.map((row, index) => (
                  <TableRow key={index} index={index} username={this.state.oneMonth[index].username} monthpoints={this.state.oneMonth[index].recent} allpoints={this.state.oneMonth[index].alltime}/>
                ))
              }
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Main;
