function validar() {
 
  var password = document.getElementById('password').value;
  
  if (password === '123456') {
    alert('Tu contraseña debe ser distinta de 123456')
  }

   return true;
}
