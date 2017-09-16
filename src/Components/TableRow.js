import React from 'react';
import PropTypes from 'prop-types';
import './../css/ComponentsStyles/customTableRow.css';

export const TableRow = props => {
  const { index, username, profilepicture, monthpoints, allpoints } = props; //destructuring
  return (
    <tr>
      <th scope="1">{index + 1}</th>
      <td>
        <a
          href={`https://www.freecodecamp.org/${username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={profilepicture}
            className="profilePicture"
            alt="Camper Profile"
          />
        </a>
      </td>
      <td>
        <a
          href={`https://www.freecodecamp.org/${username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {username}
        </a>
      </td>
      <td>{monthpoints}</td>
      <td>{allpoints}</td>
    </tr>
  );
};

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  profilepicture: PropTypes.string.isRequired,
  monthpoints: PropTypes.number.isRequired,
  allpoints: PropTypes.number.isRequired
}
