import { services } from "./service.js";

window.addEventListener('load', () => {
    const form = document.getElementById('new-task-form');
    const input = document.getElementById('new-task-input');
    const listElement = document.getElementById('tasks');

// This section is for the clear todolist button

    document.getElementById('cleared').addEventListener('click', () => {
        // document.getElementById('modalBody').innerHTML = 'Cleared';
        // document.getElementById('cleared').style.display = 'none';
        clearData()
    })

    function clearData() {
        
        if (document.getElementById('tasks').innerHTML === '') {
            document.getElementById('modalBody').innerHTML = 'Cleared';
            document.getElementById('cleared').style.display = 'none';
        }
        else {
            document.getElementById('modalBody').innerHTML = 'Are you sure you want to clear all your todo?';
            document.getElementById('cleared').style.display = 'block';
        }
        document.getElementById('tasks').innerHTML = '';

        
        form.addEventListener('submit', () => {
            document.getElementById('modalBody').innerHTML = 'Are you sure you want to clear all your todo?';
            document.getElementById('cleared').style.display = 'block';
        })
    }

// This section is for the main section of the project
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            // clearButton
            document.getElementById('clearedButton').click();
            alertMessage()
            // const errorValue = alertMessage(modal, clear);
            // errorValue()
            // alert('Pls fill out the task');
            return;
        }

        function alertMessage() {
            const modal = document.getElementById('modalsBody');
            const clear = document.getElementById('clears');
            modal.innerHTML = 'Pls fill out the task';
            clear.style.display = 'none';

            return;
        }


        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskContentElement = document.createElement('div');
        taskContentElement.classList.add('content');
        // taskContentElement.innerText = task;

        taskElement.appendChild(taskContentElement);

        const taskInputElement = document.createElement('input');
        taskInputElement.classList = 'text';
        taskInputElement.type = 'text';
        taskInputElement.value = task;
        taskInputElement.setAttribute('readonly','readonly');

        taskContentElement.appendChild(taskInputElement);

        const taskActionElement = document.createElement('div');
        taskActionElement.classList.add('actions');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const attrib = ' data-bs-toggle="modal" data-bs-target=".edit"';
        const taskEditElement = document.createElement('button');
        taskEditElement.classList.add('edit') + attrib;
        // taskEditElement.setAttribute('data-bs-toggle="modal"','data-bs-toggle="modal"');
        // taskEditElement.setAttribute('data-bs-target=".edit"','data-bs-target=".edit"');
        taskEditElement.innerHTML = 'Edit'
        // console.log(taskEditElement)
        /////////////////////////////////////////////////////////////////////////////////////////////////////////

        const taskDeleteElement = document.createElement('button');
        taskDeleteElement.classList.add('delete');
        taskDeleteElement.innerHTML = 'delete';

        taskActionElement.appendChild(taskEditElement);
        taskActionElement.appendChild(taskDeleteElement);

        taskElement.appendChild(taskActionElement);


        listElement.appendChild(taskElement);


        input.value = '';

        taskEditElement.addEventListener('click', () => {
            if (taskEditElement.innerText.toLowerCase() === 'edit') {
                
             taskInputElement.removeAttribute('readonly');
             taskInputElement.focus()
             taskEditElement.innerText = 'Save';
            }
            else {
                // console.log('save')
                taskInputElement.setAttribute('readonly', 'readonly');
                taskEditElement.innerText = 'Edit';
            }
        })

        // taskEditElement.innerText = 'Save'.addEventListener('click', () => {});

        const localData = services.storeTodo(task);
        // console.log(localData)


        taskDeleteElement.addEventListener('click', () => {
            listElement.removeChild(taskElement);
        });
    });
});