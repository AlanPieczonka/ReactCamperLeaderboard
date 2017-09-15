import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, Label, Input } from 'reactstrap';
export const SelectInput = (props) => {
        return(
           <FormGroup>
            <Label for="exampleSelect">Sort By {props.test}</Label>
            <Input type="select" name="select" id="exampleSelect" onChange={this.handleChange}>
              <option value="30days">Top 100 campers for the last 30 days</option>
              <option value="alltime">Top 100 campers of all time</option>
            </Input>
          </FormGroup>
        );
};