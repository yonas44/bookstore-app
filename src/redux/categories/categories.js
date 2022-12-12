const CHECK_STATUS = 'CHECK_STATUS';

export default function categoriesReducer(state = [], action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}
