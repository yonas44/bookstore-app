import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  books: bookReducer,
  categories: categoriesReducer,
});

export default store;
