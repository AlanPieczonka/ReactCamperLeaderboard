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
    this.loadData('https://fcctop100.herokuapp.com/api/fccusers/top/entireTime','entireTime');
  }

  loadData(url, stateName) {
    axios
      .get(url)
      .then((resp) => {
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
    let toRender;
    let properTableComponent;
    if (this.state.selectedDaysState === '30days') {
       toRender = this.state.monthTime;
    }
    else if(this.state.selectedDaysState === 'alltime'){
      toRender = this.state.entireTime;
    }else{
      toRender = "Error"
    }
      properTableComponent = this.state.monthTime.map((row, index) => (
        <TableRow
          key={index}
          index={index}
          username={toRender[index].username}
          profilepicture={this.state.toRender[index].img}
          monthpoints={this.state.toRender[index].recent}
          allpoints={this.state.toRender[index].alltime}
        />
      ));

    return (
      <main>
        <Container>
          <SelectInput onChange={this.handleSelect} />
          <Table>
            <TableHead />
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
