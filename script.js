let tamanhoFonte = 18;

function aumentarFonte() {
    if (tamanhoFonte < 26) {
        tamanhoFonte += 2;
        document.documentElement.style.fontSize = tamanhoFonte + "px";
    }
}

function diminuirFonte() {
    if (tamanhoFonte > 14) {
        tamanhoFonte -= 2;
        document.documentElement.style.fontSize = tamanhoFonte + "px";
    }
}


function lerPagina() {
    window.speechSynthesis.cancel();

    const texto = document.querySelector("main").innerText;

    const leitura = new SpeechSynthesisUtterance(texto);

    leitura.lang = "pt-BR";
    leitura.rate = 0.9;

    window.speechSynthesis.speak(leitura);
}


function mostrarAlerta(tipo) {

    let mensagem = "";

    if (tipo === "Golpe") {
        mensagem =
            "Se você acha que caiu em um golpe, pare de conversar com a pessoa, não faça novos pagamentos e procure ajuda de alguém de confiança.";
    }

    if (tipo === "Senha") {
        mensagem =
            "Troque sua senha imediatamente. Se a senha for usada em outros serviços, troque-a nesses serviços também.";
    }

    if (tipo === "Mensagem") {
        mensagem =
            "Não clique em links suspeitos. Verifique quem enviou a mensagem antes de fornecer informações ou realizar pagamentos.";
    }

    alert(mensagem);
}
