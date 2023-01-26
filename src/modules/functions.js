/* eslint-disable no-restricted-globals */
const updateIndex = (list) => {
  if (list.length > 0) {
    const newList = list.map((el, id) => {
      const ind = { ...el, index: id + 1 };
      return ind;
    });
    return newList;
  }
  return list;
};

/* ======== Stores a list to localstorage ============= */
const storeItems = (items) => {
  const list = JSON.stringify(updateIndex(items));
  localStorage.setItem('todo', list);
};

/* ======== Gets a list from localstorage ============= */
const getItems = () => {
  if (localStorage.getItem('todo')) {
    return JSON.parse(localStorage.getItem('todo'));
  }
  return [];
};

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

// =================== Code for next milestone under dev ===============

const handleState = () => {
  // code for next milestone
};

// =================== Code for next milestone under dev ===============

/* ======== Renders DOM ============= */
const displayTasks = (task, container) => {
  container.innerText = '';
  if (task.length > 0) {
    const ul = document.createElement('ul');
    task
      // .sort((a, b) => a.index - b.index)
      .forEach((el) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'input-items arrange-items');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('class', 'list-item');
        checkbox.type = 'checkbox';
        checkbox.id = `id${el.index}`;
        checkbox.addEventListener('click', (e) => {
          handleState(e);
        });
        const trash = document.createElement('span');
        trash.innerHTML = `<i id=${el.index} class="fa-sharp fa-solid fa-trash"></i>`;
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
        ul.appendChild(li);
      });
    container.append(ul);
  }
};

export default listArray;
export { addItem, removeItem, editItem, displayTasks };
