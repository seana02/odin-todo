import './styles.css';
import {
    titleComponent,
    newProjectComponent,
    sidebarComponent, todoDialogueComponent,
} from './init.js';
import Project from './project.js';

(function init() {
    const body = document.querySelector('body');
    const topDiv = document.createElement('div');
    topDiv.classList.add('top-div');
    topDiv.append(
        titleComponent(),
        newProjectComponent()
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
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
        newTodoDialogue.classList.remove('active');
    });

    body.append(
        topDiv,
        sidebar,
        mainBody,
        newTodoDialogue,
        overlay
    );

})();


