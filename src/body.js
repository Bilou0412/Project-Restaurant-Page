import slogan from './slogan';
import content from './content';

const corp = () => {
  const container = document.getElementById('container');
  const body = document.createElement('div');
  body.classList.add('body');
  container.appendChild(body);
  body.appendChild(slogan());
  body.appendChild(content());
};

export default corp;
