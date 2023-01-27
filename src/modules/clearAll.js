import { storeItems } from './storage';
const clearCompleted = (list) => {
  if (list.length > 0) {
    const allCompleted = list.filter((el) => !el.completed);
    console.log(allCompleted.length);
    if (allCompleted.length <= 0) {
      localStorage.removeItem('todo');
    } else {
      storeItems(allCompleted);
    }
    location.reload();
  }
};

export default clearCompleted;
