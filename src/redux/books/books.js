const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export function addBook(detail) {
  return {
    type: ADD_BOOK,
    payload: {
      detail,
    },
  };
}

export function removeBook(detail) {
  return {
    type: REMOVE_BOOK,
    payload: {
      id: detail.id,
    },
  };
}

export default function bookReducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload.detail];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.detail.id);
    default:
      return state;
  }
}
