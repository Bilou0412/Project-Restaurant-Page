import './style.scss';

const header = () => {
  const container = document.querySelector('#container');
  const title = document.createElement('div');
  const navbarr = document.createElement('div');

  title.classList.add('title');
  title.innerHTML = '<h1>Papizza</h1>';
  navbarr.classList.add('navbarr');
  navbarr.innerHTML =
    '<div class="btn">Home</div><div class="btn">Menu</div><div class="btn">About</div><div class="btn">Contact</div>';

  container.appendChild(title);
  container.appendChild(navbarr);
};

export default header;
