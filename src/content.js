import delivery from './delivery';
import sloganTwo from './sloganTwo';

const content = () => {
  const div = document.createElement('div');
  div.classList.add('content');
  div.appendChild(delivery());
  div.appendChild(sloganTwo());
  return div;
};

export default content;
