const container = document.querySelector('.container');

for(let i = 0; i <= 256; i++) {
  const div = document.createElement('div');
  div.classList.add('div');
  container.appendChild(div);
  div.addEventListener('click', function() {
    div.style.backgroundColor = 'black';
  });
}

