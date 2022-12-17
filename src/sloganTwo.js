const sloganTwo = () => {
  const div = document.createElement('div');
  div.classList.add('slogan-two');
  const p = document.createElement('p');
  p.textContent = `Authentic Italian pizza.<br>
Made with love and passion by Italian chefs in a wood-fired oven.`;
  div.appendChild(p);
  return div;
};

export default sloganTwo;
