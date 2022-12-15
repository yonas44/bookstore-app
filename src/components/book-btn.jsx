import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookAsync } from '../redux/books/books';

const Button = (props) => {
  const { id, name } = props;

  const dispatch = useDispatch();

  const handleComments = () => 'Hi, comments here';

  const handleEdit = () => 'Hi, Edit here';

  const handleDelete = () => {
    dispatch(removeBookAsync(id));
  };

  return (
    <button
      id={id}
      onClick={() => {
        if (name === 'Comments') {
          return handleComments();
        }
        if (name === 'Remove') {
          return handleDelete();
        }
        return handleEdit();
      }}
      type="button"
      className={`inter-btn ${name === 'Remove' ? 'middle' : ''}`}
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
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Button;
