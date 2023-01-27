import { storeItems } from './storage';

const clearCompleted = (list) => {
  if (list.length > 0) {
    const allCompleted = list.filter((el) => !el.completed);
    if (allCompleted.length <= 0) {
      localStorage.removeItem('todo');
    } else {
      storeItems(allCompleted);
    }
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
};

export default clearCompleted;
