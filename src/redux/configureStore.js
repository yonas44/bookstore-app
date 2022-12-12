import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = configureStore({
  books: bookReducer,
  categories: categoriesReducer,
});

export default rootReducer;
