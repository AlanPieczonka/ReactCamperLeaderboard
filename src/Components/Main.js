import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Container, Table } from 'reactstrap';

import {SelectInput} from './SelectInput';

class Main extends Component{

    constructor(props){
      super(props);
      this.state = {value: '30days'};

      this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        .then((resp) => resp.json())
        .then(function(data){
            return console.log(data);
        });

        fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
        .then((resp) => resp.json())
        .then(function(data){
            return console.log(data);
        });    
    }

    handleChange(event){
      this.setState({value: event.target.value});
    }

    render(){
        return (
            <Container>
              <SelectInput test={"goha"}/>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Camper Name</th>
                  <th>Profile picture</th>
                  <th>Points in 30 days</th>
                  <th>All time points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Img tag</td>
                  <th>2343234</th>
                  <th>234234</th>
                </tr>
              </tbody>
            </Table>
            </Container>
          );
    }
}

export default Main;