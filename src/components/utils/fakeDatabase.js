import uuid from 'react-uuid';

const booksDB = [
  {
    id: uuid(),
    detail: {
      author: 'Yonas',
      title: 'Twilight',
      genre: 'Action',
    },
  },
  {
    id: uuid(),
    detail: {
      author: 'Selam',
      title: 'Breaking bad',
      genre: 'Crime',
    },
  },
  {
    id: uuid(),
    detail: {
      author: 'Henok',
      title: 'Twilight',
      genre: 'Horror',
    },
  },
];

export default booksDB;
