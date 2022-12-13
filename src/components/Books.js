import React from 'react';
import { useSelector } from 'react-redux';
import Book from './SingleBook';
import BookAdder from './BookAdder';
import './styles/Books.css';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <main>
      <div className="books-holder">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.detail.title}
            author={book.detail.author}
            genre={book.detail.genre}
          />
        ))}
      </div>
      <hr className="line" />
      <BookAdder />
    </main>
  );
};

export default Books;
