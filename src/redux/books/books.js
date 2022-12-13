import uuid from 'react-uuid';
import booksDB from '../../components/utils/fakeDatabase';

export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export function addBook(detail) {
  return {
    type: ADD_BOOK,
    payload: {
      id: uuid(),
      detail,
    },
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    payload: {
      id,
    },
  };
}

export default function bookReducer(state = booksDB, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}
