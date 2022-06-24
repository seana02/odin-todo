export default function layout() {
    const body = document.querySelector('body');

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
    logoSvg.appendChild(logoSvgPath);
    const title = document.createElement('div');
    title.classList.add('title');
    title.innerText = 'Odin Todo';
    logo.appendChild(logoSvg);
    logo.appendChild(title);
    topDiv.appendChild(logo);

    const newProjectButton = document.createElement('div');
    newProjectButton.classList.add('new-project-button');
    const newProjectSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newProjectSvg.classList.add('new-project-svg');
    newProjectSvg.setAttribute('viewBox', '0 0 24 24');
    const newProjectSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    newProjectSvgPath.setAttribute('fill', 'currentColor');
    newProjectSvgPath.setAttribute('d', 'M13.09 20C13.21 20.72 13.46 21.39 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09V4H13V12L10.5 9.75L8 12V4H6V20H13.09M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z');
    newProjectSvg.appendChild(newProjectSvgPath);
    const newProjectText = document.createElement('div');
    newProjectText.classList.add('new-project-text');
    newProjectText.innerText = 'New Project';
    newProjectButton.appendChild(newProjectSvg);
    newProjectButton.appendChild(newProjectText);
    topDiv.appendChild(newProjectButton);

    body.appendChild(topDiv);



    const listDiv = document.createElement('div');
    body.appendChild(listDiv);
}