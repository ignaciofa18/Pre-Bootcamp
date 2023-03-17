function message() {
    alert("ninja was liked")
}

function esconder(el){
    el.remove();
}

function cambiar(x){
    if(x.innerText == "login") {
            x.innerText == "logout";
    }else{
        x.innerText == "login";
    }
}