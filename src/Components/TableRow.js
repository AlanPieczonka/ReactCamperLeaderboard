import React from 'react';

import customTableRow from './../css/ComponentsStyles/customTableRow.css';

export const TableRow = props => {
  return (
    <tr>
      <th scope="1">{props.index + 1}</th>
      <td>
        <a
          href={`https://www.freecodecamp.org/${props.username}`}
          target="_blank"
        >
          <img
            src={props.profilepicture}
            className="profilePicture"
            alt="Camper Profile"
          />
        </a>
      </td>
      <td>
        <a
          href={`https://www.freecodecamp.org/${props.username}`}
          target="_blank"
        >
          {props.username}
        </a>
      </td>
      <td>{props.monthpoints}</td>
      <td>{props.allpoints}</td>
    </tr>
  );
};
