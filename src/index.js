import listArray, { addItem, displayTasks } from './modules/functions';
import './style.css';

const container = document.querySelector('.task-list');
const addBtn = document.querySelector('.add_user_input');
const item = document.getElementById('user_input');

addBtn.addEventListener('click', () => {
  addItem(item.value, listArray);
  displayTasks(listArray, container);
  item.value = '';
  document.getElementById('user_input').focus();
});

item.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addItem(item.value, listArray);
    displayTasks(listArray, container);
    item.value = '';
    document.getElementById('user_input').focus();
  }
});


displayTasks(listArray, container);
