const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initailState = 'Hi, this is Catagories page';

export function changeCategories(category) {
  return {
    type: CHECK_STATUS,
    payload: {
      category,
    },
  };
}

export default function categoriesReducer(state = initailState, action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}
