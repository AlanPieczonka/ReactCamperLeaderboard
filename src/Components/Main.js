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
      monthTime: [],
      entireTime: [],
      selectedDaysState: '30days'
    };
  }

  componentDidMount() {
    this.loadData('https://fcctop100.herokuapp.com/api/fccusers/top/recent','monthTime');
    this.loadData('https://fcctop100.herokuapp.com/api/fccusers/top/alltime','entireTime');
  }

  loadData(url, stateName) {
    axios
      .get(url)
      .then(resp => {
        this.setState({ [stateName]: resp.data });
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
    const selectedDaysState = this.state.selectedDaysState;
    let daysToRender;
    let properTableComponent;

    switch (selectedDaysState) {
      case '30days':
        daysToRender = this.state.monthTime;
        break;
      case 'alltime':
        daysToRender = this.state.entireTime;
        break;
    }

    if (daysToRender) {
      properTableComponent = this.state.monthTime.map((row, index) => (
        <TableRow
          key={index}
          index={index}
          username={daysToRender[index].username}
          profilepicture={daysToRender[index].img}
          monthpoints={daysToRender[index].recent}
          allpoints={daysToRender[index].alltime}
        />
      ));
    } else {
        properTableComponent = <tr><th>Error</th></tr>;
    }

    return (
      <main>
        <Container>
          <SelectInput onChange={this.handleSelect} />
          <Table>
            <TableHead />
            <tbody>{properTableComponent}</tbody>
          </Table>
        </Container>
      </main>
    );
  }
}

export default Main;
