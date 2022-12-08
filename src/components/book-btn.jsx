import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { id, name } = props;
  return (
    <button
      id={id}
      type="button"
      className={`inter-btn ${id === 2 ? 'middle' : ''}`}
    >
      {name}
    </button>
  );
};

Button.defaultProps = {
  id: null,
  name: null,
};

Button.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};

export default Button;
