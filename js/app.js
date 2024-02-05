// Форма
// Список задач
const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: false,
    deleted: false,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    deleted: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  // {
  //   _id: '5d2ca9e2e03d40b3232496aa7',
  //   completed: false,
  //   deleted: false,
  //   body:
  //     'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
  //   title: 'Eu ea incididunt sunt consectetur fugiat non.',
  // },
  // {
  //   _id: '5d2ca9e29c8a94095564788e0',
  //   completed: false,
  //   deleted: false,
  //   body:
  //     'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
  //   title:
  //     'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  // },
];

(function(arrOfTasks) {
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});
  

  const themes = {
    default: {
      '--base-text-color': '#212529',
      '--header-bg': '#007bff',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#007bff',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#0069d9',
      '--default-btn-border-color': '#0069d9',
      '--danger-btn-bg': '#dc3545',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#bd2130',
      '--danger-btn-border-color': '#dc3545',
      '--complete-btn-bg': '#30bd30',
      '--complete-btn-text-color': '#fff',
      '--complete-btn-hover-bg': '#2d9e22',
      '--complete-btn-border-color': '#35dc35',
      '--info-btn-bg': '#17a2b8',
      '--info-btn-text-color': '#fff',
      '--info-btn-hover-bg': '#377a85',
      '--info-btn-active-bg': '#377a85',
      '--info-btn-border-color': '#377a85',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#80bdff',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
    },
    dark: {
      '--base-text-color': '#212529',
      '--header-bg': '#343a40',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#58616b',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#292d31',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow':
        '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#b52d3a',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#88222c',
      '--danger-btn-border-color': '#88222c',
      '--complete-btn-bg': '#2d7326',
      '--complete-btn-text-color': '#fff',
      '--complete-btn-hover-bg': '#1f531b',
      '--complete-btn-border-color': '#1f531b',
      '--restore-btn-bg': '#494d51',
      '--restore-btn-text-color': '#fff',
      '--restore-btn-hover-bg': '#1d1f21',
      '--restore-btn-border-color': '#1d1f21',
      '--info-btn-bg': '#1c4887',
      '--info-btn-text-color': '#fff',
      '--info-btn-hover-bg': '#243d61',
      '--info-btn-active-bg': '#243d61',
      '--info-btn-border-color': '#243d61',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
    light: {
      '--base-text-color': '#212529',
      '--header-bg': '#e8e7e7',
      '--header-text-color': '#212529',
      '--default-btn-bg': '#e8e7e7',
      '--default-btn-text-color': '#212529',
      '--default-btn-hover-bg': '#9BB2B4',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow':
        '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#f1b5bb',
      '--danger-btn-text-color': '#212529',
      '--danger-btn-hover-bg': '#ef808a',
      '--danger-btn-border-color': '#e2818a',
      '--complete-btn-bg': '#9ce09c',
      '--complete-btn-text-color': '#fff',
      '--complete-btn-hover-bg': '#6ea169',
      '--restore-btn-bg': '#b1c1af',
      '--restore-btn-text-color': '#fff',
      '--restore-btn-hover-bg': '#8d998b',
      '--restore-btn-border-color': '#8d998b',
      '--info-btn-bg': '#9cb5cf',
      '--info-btn-text-color': '#fff',
      '--info-btn-hover-bg': '#577697',
      '--info-btn-active-bg': '#577697',           // change background
      '--info-btn-border-color': '#577697',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
  };
  let lastSelectedTheme = 'default';

  // Элементы
  const listContainer = document.querySelector(
    '.tasks-list-section .list-group',
  );
  console.log('listContainer', listContainer);
  let type = 'all'
  
  const selectTasks = document.querySelector('.tasks-btn')
  const arrOfSelectTasks = Array.from(selectTasks.children)
  const btnNew = document.querySelector('.new')
  const btnCompl = document.querySelector('.compl')
  const btnDel = document.querySelector('.del')
  const btnAll = document.querySelector('.all')


  selectTasks.addEventListener('click', (e) => {                                 
    
    for (let i = 0; i < arrOfSelectTasks.length; i++) {                         // Удаление с кнопки активации
       if (selectTasks.children.item(i).classList.contains('act')) {
        selectTasks.children.item(i).classList.remove('act')
      }
    }

    if (e.target.classList.contains('del')) {
      // filter task with status false
      listContainer.innerHTML = ''
      type = 'del'
      e.target.classList.add('act')
      const filterDel = Object.values(objOfTasks).filter(task => task.deleted === true)
      const listDel = filterDel.reduce((acc, task) => {
        acc[task._id] = task;
        return acc;
      }, {});
      console.log('listDel', listDel);
      renderTasks(listDel)  
    } else if (e.target.classList.contains('compl')) {
      console.log('list of complete');
      e.target.classList.add('act')
      listContainer.innerHTML = ''
      type = 'compl'
      const filter = Object.values(objOfTasks).filter(task => task.completed === true && task.deleted === false)
      const listCompl = filter.reduce((acc, task) => {
        acc[task._id] = task;
        return acc;
      }, {});
      console.log('listCompl', listCompl);
      renderTasks(listCompl)
    } else if (e.target.classList.contains('new')) {
      console.log('list of new');
      e.target.classList.add('act')
      listContainer.innerHTML = ''
      type = 'new'
      const filter = Object.values(objOfTasks).filter(task => task.completed === false && task.deleted === false)
      const listNew = filter.reduce((acc, task) => {
        acc[task._id] = task;
        return acc;
      }, {});
      console.log('listCompl', listNew);
      renderTasks(listNew)
    } else if (e.target.classList.contains('all')) {
      console.log('list of all');
      e.target.classList.add('act')
      listContainer.innerHTML = ''
      type = 'all'
      renderTasks(objOfTasks)
      console.log('objOfTasks', objOfTasks);
      console.log('arr:', Object.values(objOfTasks));
    }
  })

  
  const form = document.forms['addTask'];
  const inputTitle = form.elements['title'];
  const inputBody = form.elements['body'];
  const themeSelect = document.getElementById('themeSelect');

  // События
  renderTasks(objOfTasks);
  form.addEventListener('submit', onFormSubmitHandler);
  listContainer.addEventListener('click', onDeletehandler);
  listContainer.addEventListener('click', onCompletehandler);
  listContainer.addEventListener('click', onRestorehandler);
  listContainer.addEventListener('click', onReturnhandler);
  themeSelect.addEventListener('change', onThemeSelectHandler);

  /// создать другой фрагмент
  function renderTasks(list) {
    console.log('type:', type);

    if (JSON.stringify(list).length < 3) {
      const text = document.createElement('p')
      if (type === 'compl') {
        console.error('Нет выполненных задач!');
        text.textContent = 'No completed tasks yet'
      } else if (type === 'del') {
        console.log('Нет удаленных задач!');
        text.textContent = 'No deleted tasks yet'
      } else if (type === 'new') {
        console.log('Нет новых задач!');
        text.textContent = 'No new tasks yet, you can relax 🙂'
      } else if (type === 'all') {
        console.error('Передайте список задач!');
        text.textContent = 'No tasks yet, you can relax 🙂'
      }
      text.classList.add('alert', 'alert-primary', 'd-flex', 'align-items-center', 'justify-content-center', 'text')
      listContainer.appendChild(text)
      console.log('listContainer:', listContainer);
      return;
    }
    console.log('list', list);
    const fragment = document.createDocumentFragment();
    Object.values(list).forEach(task => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }



// Список задач
  function listItemTemplate({ _id, title, body, completed, deleted } = {}) {
    const li = document.createElement('li');
    li.classList.add(
      'list-group-item',
      'd-flex',
      'align-items-center',
      'flex-wrap',
      'mt-2',
    );
    
    li.setAttribute('data-task-id', _id);

    const span = document.createElement('span');
    span.textContent = title;
    span.style.fontWeight = 'bold';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete task';
    deleteBtn.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');
    
    const article = document.createElement('p');
    article.textContent = body;
    article.classList.add('mt-2', 'w-100');

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('btn', 'btn-success', 'mr-auto', 'complete-btn');


    if (type === 'compl') {
      li.classList.add('color-green')
      completeBtn.textContent = 'Restore';
      completeBtn.classList.remove('btn-success', 'complete-btn')
      completeBtn.classList.add('btn-secondary', 'restore-btn')
    }

    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);
    li.appendChild(completeBtn);
    if (type === 'del') {
      completeBtn.setAttribute('disabled', 'disabled')
      deleteBtn.setAttribute('disabled', 'disabled')
      const btn = document.createElement('button')
      btn.textContent = 'Return task'
      btn.classList.add('btn', 'btn-secondary', 'return-btn')
      li.appendChild(btn);
    } else if (type === 'all') {                                                       //добавить настройки оформления
      if (completed) {
        li.classList.add('color-green');
        completeBtn.textContent = 'Restore';
        completeBtn.classList.remove('btn-success', 'complete-btn')
        completeBtn.classList.add('btn-secondary', 'restore-btn')
      }
      if (deleted) {
        completeBtn.setAttribute('disabled', 'disabled')
        deleteBtn.setAttribute('disabled', 'disabled')
        const btn = document.createElement('button')
        btn.textContent = 'Return task'
        btn.classList.add('btn', 'btn-secondary', 'return-btn')
        li.appendChild(btn);
      }
    }

    

    return li;
  }

// Форма добавления задачи
  function onFormSubmitHandler(e) {
    e.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (!titleValue && !bodyValue) {
      alert('Пожалуйста введите title и body');
      return;
    } else if (!titleValue) {
      alert('Пожалуйста введите title');
      return;
    } else if (!bodyValue) {
      alert('Пожалуйста введите body');
      return;
    }

    const task = createNewTask(titleValue, bodyValue);
    const listItem = listItemTemplate(task);
    if (type === 'new' || type === "all") {
    listContainer.insertAdjacentElement('afterbegin', listItem);
    } else if (type === 'del') {
      btnDel.click()
    } else if (type === 'compl') {
      btnCompl.click()
    }

    form.reset(); 
  }

//  Создание задачи
  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      deleted: false,
      _id: `task-${Math.random()}`,
    };

    objOfTasks[newTask._id] = newTask;
    
    
    if (listContainer.lastChild === document.querySelector('.text')) { 
      listContainer.lastChild.remove()
    }
    console.log('listContainer', listContainer)

    return { ...newTask };
  }

//  Проверка наличия задачи
function checkQuantityTasks() {
  if (type === 'compl') {
    btnCompl.click()
  } else if (type === 'del'){
    btnDel.click()
  } else if (type === 'new'){
    btnNew.click()
  } else if (type === 'all'){
    btnAll.click()
  }  
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
//  Удаление задачи
  function deleteTask(id) {
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Вы уверены, что хотите удалить задачу "${title}"`);
    if (!isConfirm) return isConfirm;
    objOfTasks[id].deleted = true;
    console.log('objOfTasks:', objOfTasks[id]);
    checkQuantityTasks()
    return isConfirm;
  }

  function deleteTaskFromHtml(confirmed, el) {
    console.log(confirmed, el)
    if (!confirmed) return;
    const btn = document.createElement('button')
    btn.textContent = 'Return task'
    btn.classList.add('btn', 'btn-secondary', 'return-btn')
    el.children[3].insertAdjacentElement('afterEnd', btn)
    el.children[1].setAttribute('disabled', 'disabled')                       // кнопка удаления задачи не активна
    el.children[el.children.length - 2].setAttribute('disabled', 'disabled')  // кнопка выполнения задачи не активна
    console.log(el.children[el.children.length - 1]);
    if (type === 'new' || type === 'compl') {
      el.remove()
      checkQuantityTasks() 
    }
  }

  function onDeletehandler({ target }) {
    if (target.classList.contains('delete-btn')) {
      const parent = target.closest('[data-task-id]');
      const id = parent.dataset.taskId;
      const confirmed = deleteTask(id);
      deleteTaskFromHtml(confirmed, parent);
    }
  }

//  Возвращение задачи
function returnTask(id) {
  const { title } = objOfTasks[id];
  const isConfirm = confirm(`Вы уверены, что хотите восстановить задачу "${title}"?`);
  if (!isConfirm) return isConfirm;
  objOfTasks[id].deleted = false;
  return isConfirm;
}

function returnTaskFromHtml(restored, el) {
  if (!restored) return;
  el.children[1].removeAttribute('disabled', 'disabled')
  el.children[el.children.length - 2].removeAttribute('disabled', 'disabled') 
  el.children[el.children.length - 1].remove()
  if (type === 'del') {
    el.remove()
    console.log('typeFromReturn', type);
    checkQuantityTasks()
  }
}

function onReturnhandler({ target }) {
  if (target.classList.contains('return-btn')) {
    const parent = target.closest('[data-task-id]');
    const id = parent.dataset.taskId;
    const returned = returnTask(id);
    returnTaskFromHtml(returned, parent);
  }
}


//  Выполнение задачи ------------------------------------------------------
  function completeTask(id) {
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Задача "${title}" выполнена?`);
    if (!isConfirm) return isConfirm;
    objOfTasks[id].completed = true;
    return isConfirm;
  }

  function completeTaskFromHtml(confirmed, el) {
    console.log('el', el);
    if (!confirmed) return;
    el.classList.add('color-green')
    el.lastChild.remove()                                 // удаление кнопки 'Complete'
    const btn = document.createElement('button')
    btn.textContent = 'Restore'
    btn.classList.add('btn', 'btn-secondary', 'restore-btn', 'mr-auto')
    el.appendChild(btn)
    console.log(el);
    if (type === 'new') {
      el.remove()
      checkQuantityTasks()
    } else if (type === 'all') {
      btnAll.click()
    }
  }

  function onCompletehandler({ target }) {
    if (target.classList.contains('complete-btn')) {
      const parent = target.closest('[data-task-id]');
      const id = parent.dataset.taskId;
      const confirmed = completeTask(id);
      completeTaskFromHtml(confirmed, parent);
    }
  }

// Возврат задачи в незавершенные
function restoreTask(id) {
  console.log('id', id);
  const { title } = objOfTasks[id];
  const isConfirm = confirm(`Вы уверены, что хотите отменить выполнение задачи "${title}"?`);
  if (!isConfirm) return isConfirm; 
  objOfTasks[id].completed = false;
  return isConfirm;
}

function restoreTaskFromHtml(restored, el) {
  if (!restored) return;
  el.classList.remove('color-green')
  el.lastChild.remove()
  // create button complete
  const btn = document.createElement('button')
  btn.textContent = 'Complete'
  btn.classList.add('btn', 'btn-success', 'mr-auto', 'complete-btn')
  el.appendChild(btn)
  if (type === 'compl') {
    el.remove()
    checkQuantityTasks()
  }
}

function onRestorehandler({ target }) {
  if (target.classList.contains('restore-btn')) {
    const parent = target.closest('[data-task-id]');
    const id = parent.dataset.taskId;
    const restored = restoreTask(id);
    restoreTaskFromHtml(restored, parent);
  }
}
//----------------------------------------------------------------------------------

  function onThemeSelectHandler(e) {
    const selectedTheme = themeSelect.value;
    const isConfirmed = confirm(
      `Вы действительно хотите установить тему "${selectedTheme}`,
    );
    if (!isConfirmed) {
      themeSelect.value = lastSelectedTheme;
      return;
    }
    setTheme(selectedTheme);
    lastSelectedTheme = selectedTheme;
  }

  function setTheme(name) {
    const selectedThemObj = themes[name];
    Object.entries(selectedThemObj).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }
})(tasks);
