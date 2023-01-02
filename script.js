document.getElementById("respuesta").innerHTML="";

const boton3 = document.querySelector("#copiar");
boton3.addEventListener("click",function(evento) {
    var respuesta= document.getElementById("respuesta").innerHTML;
    navigator.clipboard.writeText(respuesta)
    
    
   
        

})

const boton = document.querySelector("#encriptar");
boton.addEventListener("click",function(evento) {
    var respuesta= String(document.getElementById("respuesta").value);
    var codigo = document.getElementById("codigo").value;
    if (String(codigo)=="") {
        alert("debe ingresar texto para desencriptar")

    }else{
        var codigo2=String(codigo);
        encriptar(codigo2);
        document.getElementById("imagen").style.visibility="hidden";
        document.getElementById("mensaje").style.visibility="hidden";
        document.getElementById("copiar").style.visibility="visible";

    }
   
        

})

const boton1 = document.querySelector("#desencriptar");
boton1.addEventListener("click",function(evento) {
    var respuesta= String(document.getElementById("respuesta").value);
    var codigo = document.getElementById("codigo").value;
    if (String(codigo)=="") {
        alert("debe ingresar texto para encriptar")

    }else{
        var codigo3=String(codigo);
        desencriptar(codigo3);
        document.getElementById("imagen").style.visibility="hidden";
        document.getElementById("mensaje").style.visibility="hidden";
        document.getElementById("copiar").style.visibility="visible";
    }
   
        

})



function desencriptar(palabra) {
    var letra;
    var desencriptado="";
    var x= palabra.length
    for(var i = 0;i<x;i++){
        letra=palabra[i];
        if (letra=="a" || letra=="e" || letra=="i" || letra=="o" || letra=="u"){
            switch (letra) {
                case "a":
                    letra="a"
                    i=i+1
                    break;
                case "e":
                    letra="e"
                    i=i+4
                    break;
                case "i":
                    letra="i"
                    i=i+3
                    break;
                case "o":
                    letra="o"
                    i=i+3
                    break;
                case "u":
                    letra="u"
                    i=i+3
                    break;
            
            
                default:
                    break;
            }
        }

        desencriptado=desencriptado+letra;
    
    }
    document.getElementById("respuesta").innerHTML=desencriptado;

    
}

function encriptar(palabra) {
    var letra;
    var encriptado="";
    var x= palabra.length
    for(var i = 0;i<x;i++){
        letra=palabra[i];
        if (letra=="a" || letra=="e" || letra=="i" || letra=="o" || letra=="u"){
            switch (letra) {
                case "a":
                    letra="ai"
                    break;
                case "e":
                    letra="enter"
                    break;
                case "i":
                    letra="imes"
                    break;
                case "o":
                    letra="ober"
                    break;
                case "u":
                    letra="ufat"
                    break;
            
            
                default:
                    break;
            }
        }

        encriptado=encriptado+letra;
    
    }
    document.getElementById("respuesta").innerHTML=encriptado;

    
}
