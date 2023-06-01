function showAlert(){
   alert('¡Hola, esta es una alerta desde JavaScript!'); 
}

const form = document.getElementById('miformulario');

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const input = document.getElementById('email');
    const inputValue = input.value;

    if (validateEmail(inputValue)) {
        alert('Correo electrónico enviado correctamente.');
    } else {
        alert('Por favor ingrese un correo electrónico válido.');
    }
  }

//para evitar que JS se detenga al tirar el error cuando no encuentre el formulario (solo aparece en contacto.html) 
// se agrega el if
//form tiene un valor => la condicione es V y lee el listener
//si form es nulo => la condicion es F y no lee el listener 
if (form){
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  })
}


//agrega un detector de eventos al botón “Menú” 
//que alterna la clase “nav-links-responsive“ del elemento con la clase “.nav-links” cuando se hace clic
//cada vez que se cliquea, si existe la clase nav-links-responsive desaparezca
// y si no existe que aparezca
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})
