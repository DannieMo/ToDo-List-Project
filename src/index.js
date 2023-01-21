import './style.css';

const tasks = document.querySelector('.task-list');

const listArray = [
  {
    description: 'Project one is List Structure',
    complete: false,
    index: 0,
  },
  {
    description: 'Project two is Interactive List',
    complete: false,
    index: 1,
  },
  {
    description: 'Project three is Add and Remove',
    complete: false,
    index: 2,
  },
];

const displayTasks = (task) => {
  tasks.insertAdjacentHTML(
    'afterbegin',
    `
<li class="list-items arrange-items">
<div class="input">
  <input type="checkbox" name="" class="list-item" id="${task.index}" >
  <label class="list__input" for="">${task.description}</label>
</div>
<i class="fa-sharp fa-solid fa-trash icon__size"></i>
</li>
<hr>
`,
  );
};
tasks.innerHTML = listArray
  .reverse()
  .map((task) => displayTasks(task))
  .join('');
