const btnAdd = document.querySelector('#tasks__add');
const taskList = document.querySelector('#tasks__list')
const taskInput = document.querySelector('#task__input')
const tasks = taskList.querySelectorAll('.task')

btnAdd.addEventListener('click', (e) => {
    e.preventDefault()
    if (!taskInput.value == '') {
        const taskEl = document.createElement('div');
        taskEl.classList.add('task');

        const titleEl = document.createElement('div');
        titleEl.classList.add('task__title');
        titleEl.innerHTML = taskInput.value;


        const delEl = document.createElement('a');
        delEl.href = '#'
        delEl.classList.add('task__remove');
        delEl.innerHTML = '&times;';
        delEl.addEventListener('click', () => {
            taskEl.remove()
        })

        taskEl.appendChild(titleEl);
        taskEl.appendChild(delEl);

        taskList.prepend(taskEl);       

        taskInput.value = '';
    }

})

