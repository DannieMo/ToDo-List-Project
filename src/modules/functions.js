const container = document.querySelector('.task-list');

const storeItems = (items) => {
  localStorage.setItem('todo', JSON.stringify(items));
};

const getItems = () => {
  if (localStorage.getItem('todo')) {
    return JSON.parse(localStorage.getItem('todo'));
  }
  return [];
};

const listArray = getItems();

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

const editItem = (e) => {
  console.log(e.target.innerText);
  const text = e.target.innerText;
  e.target.innerHTML = `<input type="text" value=${text} />`;
  const doneBtn = document.createElement('div');
  doneBtn.innerHTML = `<div class="done"><i class="fa fa-check" aria-hidden="true"></i></div>`;
  e.target.parentElement.addEventListener(
    'keydown'
    // storeItems(e.target.value) Dangerous line
  );
};

let displayTasks;

const removeItem = (id) => {
  const filta = listArray.filter((item) => item.index !== +id);
  storeItems(filta);
  // displayTasks(listArray, container);
  // location.reload();
};

displayTasks = (task, container) => {
  container.innerText = '';
  if (task.length > 0) {
    const ul = document.createElement('ul');
    task.forEach((el) => {
      const li = document.createElement('li');
      li.setAttribute('class', 'list-items display-items');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('class', 'list-item');
      checkbox.type = 'checkbox';
      checkbox.id = `id${el.index}`;
      checkbox.addEventListener('click', (e) => {
        handleState(e);
        displayTasks(listArray, container);
      });
      const trash = document.createElement('span');
      trash.innerHTML = `<i id=${el.index} class="fa-sharp fa-solid fa-trash"></i>`;
      trash.addEventListener('click', () => {
        removeItem(el.index);
        displayTasks(listArray, container);
      });
      const descBox = document.createElement('div');
      const { description } = el;
      descBox.setAttribute('class', 'list__input');
      descBox.innerText = description;
      // doneBtn = `<button class="done">Done</button>`;
      descBox.addEventListener('click', (e) => editItem(e));
      li.append(checkbox, descBox, trash);
      ul.appendChild(li);
    });
    container.append(ul);
  }
};

export default listArray;
export { addItem, removeItem, editItem, displayTasks };
