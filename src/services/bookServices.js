const createApp = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/apps/${process.env.REACT_APP_ID}/books`);
  return response.json();
};

const getAllBooks = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/apps/${process.env.REACT_APP_ID}/books`);
  return response.json();
};

const createBook = async (data) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/apps/${process.env.REACT_APP_ID}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response;
};

const deleteBook = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/apps/${process.env.REACT_APP_ID}/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });

  return response;
};

const bookServices = {
  createApp,
  getAllBooks,
  createBook,
  deleteBook,
};

export default bookServices;
