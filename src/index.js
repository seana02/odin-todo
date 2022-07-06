import './styles.css';
import {
    titleComponent,
    newProjectButtonComponent,
    sidebarComponent,
    todoDialogueComponent,
    newProjectComponent, todoDOM
} from './init.js';
import Project, {activate, findProject, getProjectList} from './project.js';
import Todo, {getTodos} from "./todo";


(function init() {
    const body = document.querySelector('body');
    const topDiv = document.createElement('div');
    topDiv.classList.add('top-div');
    topDiv.append(
        titleComponent(),
        newProjectButtonComponent()
    );

    const sidebar = sidebarComponent();

    /*
    sidebar.append(
        Project('sample', '').getDOM(),
        Project('test', '').getDOM());
    const three = Project('three', '');
    sidebar.append(three.getDOM());
    three.addTodo('dummy', new Date(2015, 2, 2));
    three.addTodo('second', new Date(2021, 5, 18));
    three.addTodo('earliest', new Date(1971, 0, 3));
    */

    const mainBody = document.createElement('div');
    mainBody.classList.add('main-body');

    const newTodoDialogue = todoDialogueComponent();
    const newProjectDialogue = newProjectComponent();
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
        newTodoDialogue.classList.remove('active');
        newProjectDialogue.classList.remove('active');
        let editBoxes = document.querySelectorAll('.edit-todo-component');
        for (let eb of editBoxes) { eb.classList.remove('active'); };
    });

    body.append(
        topDiv,
        sidebar,
        mainBody,
        newTodoDialogue,
        newProjectDialogue,
        overlay
    );


    reloadProjects();
    activate.apply(document.querySelector('.sidebar-todo'));
    todoDOM();
})();

export function saveStorage() {
    let projectArray = [];
    for (let p of getProjectList()) {
        projectArray.push([p.getTitle(), p.getDescription()]);
    }
    let todoArray = [];
    for (let t of getTodos()) {
        todoArray.push([t.getTitle(), t.dueDate(), t.getDesc(), t.getProject()?.getTitle()]);
    }
    let projectJSON = JSON.stringify(projectArray);
    let todoJSON = JSON.stringify(todoArray);
    localStorage.setItem('projects', projectJSON);
    localStorage.setItem('todos', todoJSON);
}


function reloadProjects() {
    let projects = JSON.parse(localStorage.getItem('projects'));
    let todos = JSON.parse(localStorage.getItem('todos'));

    const sidebar = document.querySelector('.sidebar');

    if (projects) {
        for (let p of projects) {
            sidebar.appendChild(Project(p[0], p[1]).getDOM());
        }
    }
    if (todos) {
        for (let t of todos) {
            let projTitle = t[3];
            let proj = findProject(projTitle);
            if (proj === null) {
                let newTodo = Todo(t[0], new Date(Date.parse(t[1])));
                newTodo.setDesc(t[2]);
                todoDOM();
            } else {
                proj.addTodo(t[0], new Date(Date.parse(t[1])), t[2]);
            }
        }
    }
}



