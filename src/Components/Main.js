import React, { Component } from 'react';
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

  componentDidMount() {
    this.loadData('https://fcctop100.herokuapp.com/api/fccusers/top/recent','oneMonth');
    this.loadData('https://fcctop100.herokuapp.com/api/fccusers/top/alltime','allTime');
  }

  loadData(url, stateName) {
    axios
      .get(url)
      .then(({ data }) => {
        this.setState({ [stateName]: data });
      })
      .catch(error => {
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
    let testingComp;
    if (this.state.selectedDaysState === '30days') {
      testingComp = this.state.oneMonth.map((row, index) => (
        <TableRow
          key={index}
          index={index}
          username={this.state.oneMonth[index].username}
          profilepicture={this.state.oneMonth[index].img}
          monthpoints={this.state.oneMonth[index].recent}
          allpoints={this.state.oneMonth[index].alltime}
        />
      ));
    } else if (this.state.selectedDaysState === 'alltime') {
      testingComp = this.state.allTime.map((row, index) => (
        <TableRow
          key={index}
          index={index}
          username={this.state.allTime[index].username}
          profilepicture={this.state.allTime[index].img}
          monthpoints={this.state.allTime[index].recent}
          allpoints={this.state.allTime[index].alltime}
        />
      ));
    } else {
      testingComp = 'ERROR';
    }

    return (
      <main>
        <Container>
          <SelectInput onChange={this.handleSelect} />
          <Table>
            <TableHead />
            <tbody>{testingComp}</tbody>
          </Table>
        </Container>
      </main>
    );
  }
}

export default Main;
