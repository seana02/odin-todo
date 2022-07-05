import {activate} from "./project";
import {editForm, editTodoComponent, todoDOM} from "./init";

let todos = [];

export default function Todo(t, d, p= null) {

    let description = 'New Todo';
    let title = t;
    let due = d;
    let project = p;
    let dialogue = editTodoComponent();

    let dueDate = function() { return due; };
    let setDue = function(newDue) { due = newDue; };
    let getTitle = function() { return title; };
    let setTitle = function(newTitle) { title = newTitle; };
    let setDesc = function(newDesc) { description = newDesc; };
    let getProject = function() { return project; };
    let getDOM = function() {
        let elem = document.createElement('div');
        elem.classList.add('todo-block');
        let name = document.createElement('div');
        name.classList.add('todo-title');
        name.innerText = getTitle();
        let date = document.createElement('div');
        date.classList.add('todo-due');
        let year = dueDate().getFullYear();
        let month = getMonthString(dueDate().getMonth());
        let day = dueDate().getDate();
        date.innerText = `${month} ${day}, ${year}`;
        let desc = document.createElement('div');
        desc.classList.add('todo-description');
        desc.innerText = description;

        let buttons = document.createElement('div');
        buttons.classList.add('todo-buttons');
        let completeButton = document.createElement('button');
        completeButton.classList.add('todo-complete');
        completeButton.innerText = '✓';
        completeButton.addEventListener('click', () => getProject().completeTodo(this));
        let editButton = document.createElement('button');
        editButton.classList.add('todo-edit');
        editButton.innerText = 'Edit';
        editButton.addEventListener('click', () => {
            const overlay = document.querySelector('.overlay');
            dialogue.classList.add('active');
            overlay.classList.add('active');

            const form = dialogue.querySelector('.edit-todo-form');
            form.elements['edit-name-input'].value = getTitle();
            form.elements['edit-description-input'].value = description;
            let currMonth =`${dueDate().getMonth() + 1}`;
            if (currMonth.length === 1) {
                currMonth = `0${currMonth}`;
            }
            let currDate = `${dueDate().getDate()}`;
            if (currDate.length === 1) {
                currDate = `0${currDate}`;
            }
            form.elements['edit-due-input'].value = `${dueDate().getFullYear()}-${currMonth}-${currDate}`;
        });

        buttons.append(
            completeButton,
            editButton
        );

        elem.append(
            name,
            date,
            desc,
            buttons
        );

        return elem;
    };

    let editSubmit = function() {
        const form = dialogue.querySelector('.edit-todo-form');
        setTitle(form.elements['edit-name-input'].value);
        setDesc(form.elements['edit-description-input'].value || 'New Todo');
        let due = form.elements['edit-due-input'].value.split('-');
        let year = due[0];
        let month = due[1] - 1;
        let date = due[2];
        setDue(new Date(year, month, date));
        if (document.querySelector('.sidebar-selector.active').innerText === 'Todo') {
            todoDOM();
        } else {
            getProject().projectDOM();
        }
        form.reset();
        document.querySelector('.overlay').classList.remove('active');
        dialogue.classList.remove('active');
    }
    dialogue.querySelector('.edit-todo-form').addEventListener('submit', (e) => {
        e.preventDefault();
        editSubmit();
    });

    let newTodo = { dueDate, getDOM, getTitle, getProject, setDesc, dialogue };

    todos.push(newTodo);
    return newTodo;

}

export function getTodos() {
    return todos;
}

function getMonthString(month) {
    switch (month) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'December';
    }
}