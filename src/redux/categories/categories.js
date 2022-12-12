const CHECK_STATUS = 'CHECK_STATUS';

export function changeCategories(category) {
  return {
    type: CHECK_STATUS,
    payload: {
      category,
    },
  };
}

export default function categoriesReducer(state = [], action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}
