import Project, {activate, addToProject} from './project.js';
import { getTodos } from './todo.js';

export function titleComponent() {
    const topDiv = document.createElement('div');
    topDiv.classList.add('top-div');
    const logo = document.createElement('div');
    logo.classList.add('logo');
    const logoSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    logoSvg.classList.add('logo-svg');
    logoSvg.setAttribute('viewBox', '0 0 24 24');
    const logoSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    logoSvgPath.setAttribute('fill', 'currentColor');
    logoSvgPath.setAttribute('d', 'M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z')
    logoSvg.append(logoSvgPath);
    const title = document.createElement('div');
    title.classList.add('title');
    title.innerText = 'Odin Todo';
    logo.append(
        logoSvg,
        title
    );

    return logo;
}

export function newProjectButtonComponent() {
    const newProjectButton = document.createElement('div');
    newProjectButton.classList.add('new-project-button');
    const newProjectSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newProjectSvg.classList.add('new-project-svg');
    newProjectSvg.setAttribute('viewBox', '0 0 24 24');
    const newProjectSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    newProjectSvgPath.setAttribute('fill', 'currentColor');
    newProjectSvgPath.setAttribute('d', 'M13.09 20C13.21 20.72 13.46 21.39 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09V4H13V12L10.5 9.75L8 12V4H6V20H13.09M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z');
    newProjectSvg.append(newProjectSvgPath);
    const newProjectText = document.createElement('div');
    newProjectText.classList.add('new-project-text');
    newProjectText.innerText = 'New Project';
    newProjectButton.append(
        newProjectSvg,
        newProjectText
    );
    newProjectButton.addEventListener('click', () => {
        document.querySelector('#new-project-component').classList.add('active');
        document.querySelector('.overlay').classList.add('active');
    })

    return newProjectButton;
}

export function sidebarComponent() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    const todo = document.createElement('div');
    todo.addEventListener('click', activate.bind(todo));
    todo.addEventListener('click', todoDOM);
    todo.classList.add('sidebar-heading');
    todo.classList.add('sidebar-selector');
    todo.classList.add('sidebar-todo');
    todo.innerText = "Todo";

    const projects = document.createElement('div');
    projects.classList.add('sidebar-heading');
    projects.innerText = "Projects";

    sidebar.append(
        todo,
        projects
    );

    return sidebar;
}

export function todoDialogueComponent() {
    const dialogue = document.createElement('div');
    dialogue.id = 'new-todo-component';

    const form = document.createElement('form');
    form.id = 'new-todo-form';

    const header = document.createElement('h1');
    header.classList.add('new-todo-header');
    header.innerText = 'New Todo Item';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name-input';
    nameInput.placeholder = 'Name';
    nameInput.required = true;

    const descInput = document.createElement('textarea');
    descInput.id = 'description-input';
    descInput.rows = 2;
    descInput.placeholder = 'Description';

    const dueInput = document.createElement('input');
    dueInput.type = 'date';
    dueInput.id = 'due-input';
    dueInput.required = true;
    const dueLabel = document.createElement('label');
    dueLabel.htmlFor = 'due-input';
    dueLabel.id = 'due-input-label';
    dueLabel.innerText = 'Due Date:';
    dueLabel.append(dueInput);

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.id = 'todo-submit-button';
    submit.innerText = 'Create';

    form.append(
        nameInput,
        descInput,
        dueLabel,
        submit
    );

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addToProject();
    });

    dialogue.append(
        header,
        form
    );

    return dialogue;
}

export function editTodoComponent() {
    const dialogue = document.createElement('div');
    dialogue.classList.add('edit-todo-component');

    const header = document.createElement('h1');
    header.classList.add('edit-todo-header');
    header.innerText = 'Edit Todo Item';


    dialogue.append(
        header,
        editForm()
    );

    return dialogue;
}

export function editForm() {
    const form = document.createElement('form');
    form.classList.add('edit-todo-form');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'edit-name-input';
    nameInput.required = true;

    const descInput = document.createElement('textarea');
    descInput.id = 'edit-description-input';
    descInput.rows = 2;

    const dueInput = document.createElement('input');
    dueInput.type = 'date';
    dueInput.id = 'edit-due-input';
    dueInput.required = true;
    const dueLabel = document.createElement('label');
    dueLabel.id = 'edit-due-input-label';
    dueLabel.innerText = 'Due Date:';
    dueLabel.append(dueInput);

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.id = 'edit-submit-button';
    submit.innerText = 'Edit';

    form.append(
        nameInput,
        descInput,
        dueLabel,
        submit
    );
    return form;
}

export function todoDOM() {
    document.querySelector('.main-body').innerHTML = '';
    const todoList = getTodos();
    todoList.sort((x,y) => x.dueDate().getTime() < y.dueDate().getTime() ? -1 : 1);

    let descDiv = document.createElement('div');
    descDiv.classList.add('description');
    descDiv.innerText = 'List of all active Todos';

    let topRow = document.createElement('div');
    topRow.classList.add('project-header');

    let newTodoButton = addTodoDOM();
    topRow.append(
        descDiv,
        newTodoButton
    );

    const content = document.querySelector('.main-body');
    content.append(topRow);
    for (let item of todoList) {
        content.append(item.getDOM());
    }

}

export function addTodoDOM() {
    const newTodoButton = document.createElement('div');
    newTodoButton.classList.add('new-todo');
    newTodoButton.innerText = '+';
    newTodoButton.addEventListener('click', () => {
        const dialogue = document.querySelector('#new-todo-component');
        const overlay = document.querySelector('.overlay');
        dialogue.classList.add('active');
        overlay.classList.add('active');
    });
    return newTodoButton;
}

export function newProjectComponent() {
    const dialogue = document.createElement('div');
    dialogue.id = 'new-project-component';

    const header = document.createElement('h1');
    header.classList.add('new-project-header');
    header.innerText = 'New Project Item';

    const form = document.createElement('form');
    form.id = 'new-project-form';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'new-project-input';
    nameInput.required = true;
    nameInput.placeholder = 'Name';

    const descInput = document.createElement('textarea');
    descInput.id = 'description-input';
    descInput.rows = 2;
    descInput.placeholder = 'Description';

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.id = 'project-submit-button';
    submit.innerText = 'Create';

    form.append(
        nameInput,
        descInput,
        submit
    );

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let name = form.elements['new-project-input'].value;
        let desc = form.elements['description-input'].value;
        document.querySelector('.sidebar').appendChild(Project(name, desc).getDOM());
        form.reset();
        dialogue.classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
    });

    dialogue.append(
        header,
        form
    );

    return dialogue;

}
