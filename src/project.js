import Todo, { getTodos } from './todo.js';
import {addTodoDOM, sidebarComponent, todoDOM} from "./init";
import {saveStorage} from "./index";

let projects = [];

export default function Project(t, d = 'New Project') {

    let todos = [];
    let title = t;
    let description = d || 'New Project';

    let getTitle = function() { return title; };
    let setTitle = function(newTitle) { title = newTitle; };
    let getDescription = function() { return description; };
    let setDescription = function(newDesc) { description = newDesc; };
    let getTodos = function() { return todos; };
    let addTodo = function(title, due, description = 'New Todo') {
        let newTodo = Todo(title, due, this);
        newTodo.setDesc(description);

        todos.push(newTodo);
    }
    let getDOM = function () {
        let projectBlock = document.createElement('div');
        projectBlock.classList.add('project');
        projectBlock.classList.add('sidebar-selector');
        projectBlock.addEventListener('click', activate.bind(projectBlock));
        projectBlock.addEventListener('click', projectDOM);
        projectBlock.innerText = getTitle();
        return projectBlock;
    };
    let projectDOM = function() {
        const content = document.querySelector('.main-body');
        content.innerHTML = '';
        const todoList = getTodos();
        todoList.sort((x,y) => x.dueDate().getTime() < y.dueDate().getTime() ? -1 : 1);

        let descDiv = document.createElement('div');
        descDiv.classList.add('description');
        descDiv.innerText = description;

        let topRow = document.createElement('div');
        topRow.classList.add('project-header');

        let newTodoButton = addTodoDOM();
        let deleteProjectButton = document.createElement('div');
        deleteProjectButton.classList.add('delete-project-button');
        deleteProjectButton.innerText = 'Del';
        deleteProjectButton.addEventListener('click', delProj );

        topRow.append(
            descDiv,
            newTodoButton,
            deleteProjectButton
        );
        content.append(topRow);
        for (let item of todoList) {
            content.append(item.getDOM());
        }
    }
    let completeTodo = function(todo) {
        let index = todos.indexOf(todo);
        todos.splice(index, 1);
        saveStorage();

        if (document.querySelector('.sidebar-selector.active').innerText === 'Todo') {
            todoDOM();
        } else {
            projectDOM();
        }
    }
    let delProj = function() {
        for (let i = todos.length - 1; i >= 0; i--) {
            todos[i].deleteTodo();
        }
        let that = findProject(getTitle());
        projects.splice(projects.indexOf(that), 1);
        saveStorage();

        let sidebarReplacement = sidebarComponent();
        for (let p of projects) {
            sidebarReplacement.appendChild(p.getDOM());
        }
        document.querySelector('body').replaceChild(sidebarReplacement, document.querySelector('.sidebar'));
        activate.apply(document.querySelector('.sidebar-todo'));
        todoDOM();
    }


    let newProject = { getDOM, addTodo, completeTodo, getTitle, projectDOM, getDescription, getTodos };
    projects.push(newProject);

    return newProject;
}

export function activate() {
    for (let elem of document.querySelectorAll('.sidebar-selector')) {
        elem.classList.remove('active');
    }

    this.classList.add('active');
}

export function getProjectList() {
    return projects;
}

export function addToProject() {
    let activeProject = document.querySelector('.sidebar-selector.active');

    let form = document.querySelector('#new-todo-form');
    let name = form.elements['name-input'].value;
    let description = form.elements['description-input'].value || 'New Todo';
    let due = form.elements['due-input'].value.split('-');
    let year = due[0];
    let month = due[1] - 1;
    let date = due[2];

    if (activeProject.innerText === 'Todo') {
        let newTodo = Todo(name, new Date(year, month, date));
        newTodo.setDesc(description);
        todoDOM();
    } else {
        let currentProj = findProject(activeProject.innerText);
        currentProj.addTodo(name, new Date(year, month, date), description);
        currentProj.projectDOM();
    }

    form.reset();
    document.querySelector('.overlay').classList.remove('active');
    document.querySelector('#new-todo-component').classList.remove('active');
    saveStorage();
}

export function findProject(name) {
    for (let p of projects) {
        if (p.getTitle() === name) {
            return p;
        }
    }
    console.log('Error finding project: ' + name);
    return null;
}

