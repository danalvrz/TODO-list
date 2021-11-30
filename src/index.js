import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported
    element.innerHTML = _.join(['Hello', 'world from JS'], ' ');
    element.classList.add('hello');
  
    return element;
  }
  
  document.body.appendChild(component());