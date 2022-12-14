import React from 'react';
import { PropTypes } from 'prop-types';
import Button from './book-btn';
import './styles/Book.css';
import ProgressBar from './ProgressBar';

const Book = (props) => {
  const {
    itemId,
    title,
    author,
    genre = null,
  } = props;
  const buttons = [
    {
      id: 1,
      name: 'Comments',
    },
    {
      id: 2,
      name: 'Remove',
    },
    {
      id: 3,
      name: 'Edit',
    },
  ];
  return (
    <div className="book-container">
      <section className="left-section">
        <h4>{genre}</h4>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <div className="book-buttons">
          {buttons.map((button) => (
            <Button key={button.id} name={button.name} id={itemId} />
          ))}
        </div>
      </section>
      <section className="middle-section">
        <ProgressBar />
      </section>
      <section className="right-section">
        <div className="chapter-info">
          <p id="chap-title">CURRENT CHAPTER</p>
          <p id="chap-number">Chapter 1</p>
        </div>
        <button type="button" id="update-btn">
          UPDATE PROGRESS
        </button>
      </section>
    </div>
  );
};

Book.defaultProps = {
  itemId: null,
  title: null,
  author: null,
  genre: null,
};

Book.propTypes = {
  itemId: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  genre: PropTypes.string,
};

export default Book;
