import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './SingleBook';
import BookAdder from './BookAdder';
import { getBooksAsync } from '../redux/books/books';
import './styles/Books.css';
import load from '../assets/load.gif';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooksAsync());
  }, [dispatch]);

  return (
    <main className="books-main">
      <div className="books-holder">
        {books.allBooks.map((book) => (
          <Book
            key={book.item_id}
            itemId={book.item_id}
            title={book.title}
            author={book.author}
            genre={book.category}
          />
        ))}
      </div>
      <hr className="line" />
      <BookAdder />
      <div className={`progress ${books.pending ? 'roll' : ''}`}>
        <img id="loading" src={load} alt="loading" />
      </div>
    </main>
  );
};

export default Books;
