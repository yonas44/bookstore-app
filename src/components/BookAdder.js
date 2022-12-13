import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles/BookAdder.css';
import { addBook } from '../redux/books/books';

const BookAdder = () => {
  const initailValue = {
    author: '',
    title: '',
  };

  const dispatch = useDispatch();
  const [detail, setDetail] = useState(initailValue);

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
    dispatch(addBook(detail));
    setDetail(initailValue);
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
          required
        />
        <input
          id="input-author"
          type="text"
          placeholder="Author"
          onChange={handleChange}
          required
          value={detail.author}
        />
        <input type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default BookAdder;
