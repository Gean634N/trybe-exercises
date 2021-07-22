let titulo  = document.getElementById('header-container');
let footer = document.getElementById('footer-container');
let caixas = document.querySelectorAll('section div');
let titulosH3 = document.querySelectorAll('section div h3');

titulo.style.backgroundColor = 'rgb(0, 128, 79)';
footer.style.backgroundColor = 'rgb(4, 46, 32)';

for (let i = 0; i < 2; i += 1) {
  caixas[i].style.backgroundColor = 'rgb(226, 155, 155)';
  caixas[i + 2].style.backgroundColor = 'rgb(247, 244, 116)';
  titulosH3[i].style.backgroundColor = 'purple';
  titulosH3[i + 2].style.backgroundColor = 'black';
}

