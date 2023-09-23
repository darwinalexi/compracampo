 function validar() {
let user = document.getElementById("user").value
let password=document.getElementById("password").value
    if (user="darwinalexisguerrerobaos@gmail.com"&& password == '1004266831') {
        window.location.href = 'perfil.html';
    }else if (user.length == 0 || password.length==0) {
        alert("Credenciales incorrectas")
        }else if(user !='darwin' || password !='1234' && user.length > 0 || password.length >0){
           alert("sus credenciales son incorrectas por favor vuelva a ingresar")
        }
    }


    
 