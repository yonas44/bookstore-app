import uuid from 'react-uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../redux/books/books';
import './styles/BookAdder.css';

const BookAdder = () => {
  const initailValue = {
    item_id: uuid(),
    author: '',
    title: '',
    category: 'Fiction',
  };

  const dispatch = useDispatch();
  const [detail, setDetail] = useState(initailValue);
  const [error, setError] = useState(false);

  const handleChange = (input) => {
    const target = input.target.id;
    if (target === 'input-author') {
      setDetail((prevState) => {
        const newState = { ...prevState, author: input.target.value };
        return newState;
      });
    } else {
      setDetail((prevState) => {
        const newState = { ...prevState, title: input.target.value };
        return newState;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (detail.title.trim() && detail.author.trim()) {
      dispatch(addBookAsync(detail));
      setDetail(initailValue);
      setError(false);
      return;
    }
    setError(true);
  };

  return (
    <div className="form-holder">
      <h3 id="add-book">ADD NEW BOOK</h3>
      <form id="form" onSubmit={handleSubmit}>
        <input
          id="input-title"
          type="text"
          value={detail.title}
          placeholder="Book title"
          onChange={handleChange}
        />
        <input
          id="input-author"
          type="text"
          placeholder="Author"
          onChange={handleChange}
          value={detail.author}
        />
        <input type="submit" value="ADD BOOK" />
      </form>
      <div className={`error ${error ? 'slide' : ''}`}>
        Please fill all the inputs!
      </div>
    </div>
  );
};

export default BookAdder;
