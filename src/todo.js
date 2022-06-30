
let todos = [];

export default function Todo(title, due, project= null) {

    let description = 'New Todo';

    let dueDate = function () { return due; };
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
        date.innerText = `${month} ${day + 1}, ${year}`;
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

    let newTodo = { dueDate, getDOM, getTitle, getProject, setDesc };

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