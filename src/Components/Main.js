import React, { Component } from 'react';
import { Container, Table } from 'reactstrap';

import axios from 'axios';

import { SelectInput } from './TableComponents/SelectInput';
import { TableHead } from './TableComponents/TableHead';
import { TableRow } from './TableComponents/TableRow';

class Main extends Component {

    state = {
      monthTime: [],
      entireTime: [],
      selectedDaysState: '30days'
    };
  
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
      default:
        return;
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
            <thead> 
              <TableHead />
            </thead>
            <tbody>
              {properTableComponent}
            </tbody>
          </Table>
        </Container>
      </main>
    );
  }
}

export default Main;
