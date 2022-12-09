/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import Button from './book-btn';
import './styles/Book.css';

const Book = ({ detail }) => {
  const { firstSection, secondSection } = detail;
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
        <h4>{firstSection.genre}</h4>
        <h2>{firstSection.title}</h2>
        <h3>{firstSection.author}</h3>
        <div className="book-buttons">
          {buttons.map((button) => (
            <Button key={button.id} name={button.name} id={button.id} />
          ))}
        </div>
      </section>
      <section className="middle-section">
        <div id="progress-bar-info">
          <p id="percentage">{`${secondSection.progress}%`}</p>
          <p id="completed">Completed</p>
        </div>
      </section>
      <section className="right-section">
        <p id="chap-title">CURRENT CHAPTER</p>
        <p id="chap-number">Chapter 16</p>
        <button type="button" id="update-btn">
          UPDATE PROGRESS
        </button>
      </section>
    </div>
  );
};

Book.defaultProps = {
  detail: null,
  firstSection: null,
  secondSection: null,
};

Book.propTypes = {
  detail: PropTypes.object,
  firstSection: PropTypes.object,
  secondSection: PropTypes.object,
};

export default Book;
