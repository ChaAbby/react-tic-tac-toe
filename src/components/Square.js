import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = ({value, id, onClickCallback}) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.
  // const state = useState({id, value})


  return <button
    className="square"
    onClick={onClickCallback}
  >
    {value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;