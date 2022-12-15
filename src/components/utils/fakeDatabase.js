import uuid from 'react-uuid';

const booksDB = [
  {
    detail: {
      item_id: uuid(),
      author: 'Yonas',
      title: 'Twilight',
      genre: 'Action',
    },
  },
  {
    detail: {
      item_id: uuid(),
      author: 'Selam',
      title: 'Breaking bad',
      genre: 'Crime',
    },
  },
  {
    detail: {
      item_id: uuid(),
      author: 'Henok',
      title: 'Twilight',
      genre: 'Horror',
    },
  },
];

export default booksDB;
