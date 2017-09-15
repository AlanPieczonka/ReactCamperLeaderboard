import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, Label, Input } from 'reactstrap';

class SelectInput extends Component{
    constructor(props){
        super(props);
    }
        handleChange = (event) => {
            this.setState({ value: event.target.value });
        }
        componentDidUpdate(prevProps, prevState){
            console.log(this.state);
            console.log(this.props.test)                
        }
        render(){
            return(
                <FormGroup>
                 <Label for="exampleSelect">Sort By </Label>
                 <Input type="select" name="select" id="exampleSelect" onChange={this.handleChange}>
                   <option value="30days">Top 100 campers for the last 30 days</option>
                   <option value="alltime">Top 100 campers of all time</option>
                 </Input>
               </FormGroup>
             );
        }
};

export default SelectInput;
