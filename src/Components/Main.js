import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Table } from 'reactstrap';

import axios from 'axios';

import { SelectInput } from './SelectInput';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneMonth: [],
      allTime: [],
      selectedDaysState: '30days'
    };
  }

  getInitialState() {}

  componentDidMount() {
    axios
      .get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(({ data }) => {
        this.setState({ oneMonth: data });
        console.log(this.state.oneMonth);
        console.log(this.state.oneMonth[0]);
        console.log(this.state.oneMonth[0].username);
      })
      .catch(function(error) {
        console.log(error);
      });

      axios
      .get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(({ data }) => {
        this.setState({ allTime: data });
        console.log(this.state.allTime);
        console.log(this.state.allTime[0]);
        console.log(this.state.allTime[0].username);
      })
      .catch(function(error) {
        console.log(error);
      });

  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.selectedDaysState);
  }

  handleSelect = event => {
    this.setState({
      selectedDaysState: event.target.value
    });
  };

  render() {

    if(this.state.selectedDaysState === '30days'){          
      var testingComp =  this.state.oneMonth.map((row, index) => (
        <TableRow
          key={index}
          index={index}
          username={this.state.oneMonth[index].username}
          profilepicture={this.state.oneMonth[index].img}
          monthpoints={this.state.oneMonth[index].recent}
          allpoints={this.state.oneMonth[index].alltime}
        />
      ))
    }else if(this.state.selectedDaysState === 'alltime'){
      var testingComp =  this.state.allTime.map((row, index) => (
        <TableRow
          key={index}
          index={index}
          username={this.state.allTime[index].username}
          profilepicture={this.state.allTime[index].img}
          monthpoints={this.state.allTime[index].recent}
          allpoints={this.state.allTime[index].alltime}
        />
      ))
    }

    return (
      <Container>
        <SelectInput onChange={this.handleSelect} />
        <Table>
          <TableHead />
          <tbody>   
            {testingComp}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Main;
