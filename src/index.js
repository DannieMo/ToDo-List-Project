import clearCompleted from './modules/clearAll';
import listArray, { addItem, displayTasks } from './modules/functions';
import './style.css';

const container = document.querySelector('.task-list');
const addBtn = document.querySelector('.adduser-input');
const item = document.getElementById('user-input');
const clearAll = document.querySelector('.clear-completed-tasks');

addBtn.addEventListener('click', () => {
  addItem(item.value, listArray);
  displayTasks(listArray, container);
  item.value = '';
  document.getElementById('user-input').focus();
});

item.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addItem(item.value, listArray);
    displayTasks(listArray, container);
    item.value = '';
    document.getElementById('user-input').focus();
  }
});

clearAll.addEventListener('click', () => clearCompleted(listArray));
displayTasks(listArray, container);
