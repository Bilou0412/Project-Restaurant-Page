const slogan = () => {
  const div = document.createElement('div');
  div.classList.add('slogan');
  div.textContent = 'Come eat the best pizza of the world for 7$';
  return div;
};

export default slogan;
