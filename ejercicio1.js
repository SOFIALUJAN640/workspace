// elemento de HTML
const button = document.querySelector('.alert');
// handler
const showAlert = () => console.log('Alerta');
// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', showAlert);
