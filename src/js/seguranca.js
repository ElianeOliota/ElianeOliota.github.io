let usuario = JSON.parse(localStorage.getItem("usuario"))
console.log(usuario);

if (!usuario) {
    alert('Não localizamos os dados do usuário, por favor realize o login');
    window.location = "/src/login.html"

}