import './style.css';

const tasks = document.querySelector('.task-list');

const listArray = [
  {
    description: 'Project one is List Structure',
    complete: true,
    index: 0,
  },
  {
    description: 'Project two is Interactive List',
    complete: true,
    index: 1,
  },
  {
    description: 'Project three is Add and Remove',
    complete: false,
    index: 2,
  },
];

// =================== Code for next milestone under dev ===============

const handleState = () => {
  // code for next milestone
};

// =================== Code for next milestone under dev ===============

const displayTasks = (task, container) => {
  if (task.length > 0) {
    const ul = document.createElement('ul');
    task.forEach((el, id) => {
      const li = document.createElement('li');
      li.setAttribute('class', 'list-items arrange-items');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('class', 'list-item');
      checkbox.type = 'checkbox';
      checkbox.id = `id${id}`;
      checkbox.addEventListener('click', (id) => handleState(id));
      const trash = document.createElement('span');
      trash.innerHTML = `<i id=${id} class="fa-sharp fa-solid fa-trash"></i>`;
      const descBox = document.createElement('span');
      const { description } = el;
      descBox.setAttribute('class', 'list__input');
      descBox.innerText = description;
      li.append(checkbox, description, trash);
      ul.appendChild(li);
    });
    container.append(ul);
  }
};

displayTasks(listArray, tasks);
