const openButtons = document.querySelectorAll('.open-modal')

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        modal.showModal();
    });
});

const closeButtons = document.querySelectorAll('.close-modal')

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        modal.close()
    });
});






const header = document.getElementById('cabecalho');

const scrollThreshold = 130; // Ponto de rolagem para diminuir o cabeçalho

window.addEventListener('scroll', function() {
  if (window.pageYOffset >= scrollThreshold) {
    header.classList.add('encolhido');
    
  } 
  if (window.pageYOffset <= scrollThreshold-75) {
    header.classList.remove('encolhido');
    
  } 
});