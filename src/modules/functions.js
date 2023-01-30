/* eslint-disable no-restricted-globals */
import handleState, { visual } from './stateChange';
import getItems, { storeItems } from './storage';

const listArray = getItems();

/* ======== Adds an item to the DOM ============= */
const addItem = (item, container) => {
  if (item) {
    container.push({
      index: listArray.length + 1,
      description: item,
      completed: false,
    });
    storeItems(container);
  }
};

/* ======== Ends Edit of an item when Enter key is pressed ============= */
const editMyBox = (e, list, index, status) => {
  if (e.key === 'Enter') {
    const copyList = list.filter((el) => el.index !== index);
    const currItem = {
      index,
      description: e.target.value,
      completed: status,
    };
    copyList.push(currItem);
    storeItems(copyList);
    location.reload();
  }
};

/* ======== Edits an item on the DOM ============= */
const editItem = (e, list, id, status) => {
  e.preventDefault();
  const text = e.target.innerText;
  e.target.innerHTML = `<input type="text" class="edited-text" value=${text} />`;
  const editBoxes = document.querySelectorAll('.edited-text');
  editBoxes.forEach((box) =>
    box.addEventListener('keypress', (f) => editMyBox(f, list, id, status))
  );
};

/* ======== Removes an item from the DOM ============= */
const removeItem = (id) => {
  if (listArray.length === 1) {
    localStorage.removeItem('todo');
  } else {
    const filta = listArray.filter((item) => item.index !== +id);
    storeItems(filta);
  }
  location.reload();
};

/* ======== Renders DOM ============= */
const displayTasks = (task, container) => {
  container.innerText = '';
  if (task.length > 0) {
    const ul = document.createElement('ul');
    task.forEach((el) => {
      const li = document.createElement('li');
      li.setAttribute('class', 'input-items arrange-items');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('class', 'list-item');
      checkbox.type = 'checkbox';
      checkbox.id = `id${el.index}`;
      checkbox.checked = el.completed;
      checkbox.addEventListener('click', (e) => {
        handleState(task, e);
      });
      const trash = document.createElement('span');
      trash.innerHTML = `<i id=${el.index} class="fa-sharp fa-solid fa-trash pointer"></i>`;
      trash.addEventListener('click', () => {
        removeItem(el.index);
        displayTasks(listArray, container);
      });
      const descBox = document.createElement('div');
      const { description } = el;
      descBox.setAttribute('class', 'list-input');
      descBox.innerText = description;
      descBox.addEventListener('click', (e) =>
        editItem(e, listArray, el.index, el.completed)
      );
      li.append(checkbox, descBox, trash);
      visual(li, el.completed);
      ul.appendChild(li);
    });
    container.append(ul);
  }
};

export default listArray;
export { addItem, removeItem, editItem, displayTasks };
