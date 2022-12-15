// import booksDB from '../../components/utils/fakeDatabase';
import { createAsyncThunk } from '@reduxjs/toolkit';
import bookServices from '../../services/bookServices';

export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
export const SET_BOOKS = 'bookstore/books/SET_BOOK';

export const newApp = () => {
  bookServices.createApp().then((data) => data);
};

export const addBookAsync = createAsyncThunk(
  ADD_BOOK,
  async (detail) => bookServices.createBook(detail).then((data) => {
    if (data.ok) return detail;
    throw new Error('Sorry, adding a new book failed!');
  }),
);

export const removeBookAsync = createAsyncThunk(
  REMOVE_BOOK,
  async (id) => bookServices.deleteBook(id).then((data) => {
    if (data.ok) return id;
    throw new Error('Sorry, removing a book failed!');
  }),
);

export const getBooksAsync = createAsyncThunk(
  SET_BOOKS,
  async () => bookServices.getAllBooks().then((data) => {
    const books = Object.entries(data).map(([id, obj]) => ({
      item_id: id,
      ...obj[0],
    }));
    return books;
  }),
);

const initialState = {
  pending: false,
  successful: false,
  allBooks: [],
};

export default function bookReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${SET_BOOKS}/pending`:
      return { ...state, pending: true };
    case `${SET_BOOKS}/fulfilled`:
      return { ...initialState, successful: true, allBooks: [...action.payload] };
    case `${SET_BOOKS}/rejected`:
      return { ...state, pending: false };
    case `${ADD_BOOK}/pending`:
      return { ...state, pending: true };
    case `${ADD_BOOK}/fulfilled`:
      return { ...state, pending: false, allBooks: [...state.allBooks, action.payload] };
    case `${ADD_BOOK}/rejected`:
      return { ...state, pending: false };
    case `${REMOVE_BOOK}/pending`:
      return { ...state, pending: true };
    case `${REMOVE_BOOK}/fulfilled`:
      return {
        ...state,
        pending: false,
        allBooks: state.allBooks.filter((book) => book.item_id !== action.payload),
      };
    case `${REMOVE_BOOK}/rejected`:
      return { ...state, pending: false };
    default:
      return state;
  }
}
