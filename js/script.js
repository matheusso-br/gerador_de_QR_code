let imgBox = document.getElementById("imgBox");
let textURL = document.getElementById("textURL");
let imgQR = document.getElementById("imgQR");

function generateQR () {

    // UNIÃO ENTRE O LINK DO QR CODE E ENDERÇO DIGITADO NO CAMPO DO INPUT
    if (textURL.value.length > 0) {

        imgQR.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textURL.value;
        imgBox.classList.add("show-img"); //EXPANDE A IMAGEM QUANDO GERADA

    }
    
    // MENSAGEM DE ERRO CASO O ESPAÇO DO INPUT ESTEJA VAZIO
    else {

        textURL.classList.add("error");
        setTimeout(()=> {
            textURL.classList.remove("error"); 
        }, 1000); //TEMPO DE DURAÇÃO DA MENSAGEM DE ERRO

    }

}