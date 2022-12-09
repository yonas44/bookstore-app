import React from 'react';
import './styles/BookAdder.css';

const BookAdder = () => (
  <div className="form-holder">
    <h3 id="add-book">ADD NEW BOOK</h3>
    <form id="form">
      <input id="input-title" type="text" placeholder="Book title" />
      <input id="input-author" type="text" placeholder="Author" />
      <input type="submit" value="ADD BOOK" />
    </form>
  </div>
);

export default BookAdder;
