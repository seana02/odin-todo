import './styles.css';
import {
    titleComponent,
    newProjectButtonComponent,
    sidebarComponent,
    todoDialogueComponent,
    newProjectComponent
} from './init.js';
import Project from './project.js';
import {getTodos} from "./todo";

(function init() {
    const body = document.querySelector('body');
    const topDiv = document.createElement('div');
    topDiv.classList.add('top-div');
    topDiv.append(
        titleComponent(),
        newProjectButtonComponent()
    );

    const sidebar = sidebarComponent();
    sidebar.append(
        Project('sample', '').getDOM(),
        Project('test', '').getDOM());
    const three = Project('three', '');
    sidebar.append(three.getDOM());
    three.addTodo('dummy', new Date(2015, 2, 2));
    three.addTodo('second', new Date(2021, 5, 18));
    three.addTodo('earliest', new Date(1971, 0, 3));

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

    getTodos().forEach(t => body.append(t.dialogue));

})();


