import uber from './img/uber.png';
import deliveroo from './img/deliveroo.png';

const delivery = () => {
  const div = document.createElement('div');
  div.classList.add('delivery');

  div.innerHTML = `<img src=${uber} alt="ubereat"><img src=${deliveroo} alt="deliveroo" srcset="">`;

  return div;
};

export default delivery;
