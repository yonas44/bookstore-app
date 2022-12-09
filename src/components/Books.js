import React, { useEffect, useState } from 'react';
import booksDB from './utils/fakeDatabase';
import Book from './SingleBook';
import BookAdder from './BookAdder';
import './styles/Books.css';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksDB);
  }, []);

  return (
    <main>
      <div className="books-holder">
        {books.map((book) => (
          <Book key={book.id} detail={book} />
        ))}
      </div>
      <hr className="line" />
      <BookAdder />
    </main>
  );
};

export default Books;
