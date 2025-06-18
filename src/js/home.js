

const btnOpcoes = document.getElementById('hamburger_btn');
const divOpcoes = document.getElementById('opcoes');

btnOpcoes.addEventListener('click', () => {
  if (divOpcoes.style.display === 'none' || divOpcoes.style.display === '') {
    divOpcoes.style.display = 'flex';  // mostra
  } else {
    divOpcoes.style.display = 'none';   // esconde
  }
});

const acess = document.getElementById('acess');
const vlibrasWidget = document.querySelector('div[vw]');

acess.addEventListener('click', () => {
  if (vlibrasWidget.style.display === 'none' || !vlibrasWidget.style.display) {
    vlibrasWidget.style.display = 'block';
  } else {
    vlibrasWidget.style.display = 'none';
  }
});

const suporte = document.getElementById('suporte');

suporte.addEventListener('click', () => {
    alert("Ligue para o número (71) 9 8751-4016 para tirar dúvidas")
});