import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

import  './../../css/ComponentsStyles/customSelectInput.css';

export const SelectInput = (props) => {
            return(
                <FormGroup>
                 <Label for="exampleSelect">Sort By </Label>
                 <Input type="select" name="select" id="exampleSelect" onChange={props.onChange}>
                   <option value="30days">Top 100 campers for the last 30 days</option>
                   <option value="alltime">Top 100 campers of all time</option>
                 </Input>
               </FormGroup>
             );
};

SelectInput.propTypes = {
  onChange: PropTypes.func.isRequired
}