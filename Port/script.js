// Obtener el elemento del icono del menú
const menuIcon = document.getElementById('menu-icon');
// Obtener el elemento del menú de navegación
const navbar = document.querySelector('.navbar');

// Agregar un evento de clic al icono del menú
menuIcon.addEventListener('click', () => {
  // Alternar la clase "active" en el menú de navegación
  navbar.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
  var alerta = document.getElementById('alerta');
  alerta.classList.add('mostrar');
});

