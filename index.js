var hamburger = document.querySelector(".hamburger");//quanto minimiza ele aparece ali no lado direito
var navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", display);

function display() {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")

}

document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")

}))

window.addEventListener("scroll", reveal)

function reveal() {
    var reveals = document.querySelectorAll(".reveal");


//efeitos de rolagem animados
    for (var i = 0; i < reveals.length; i++) //É um loop que percorre todos os elementos da variável reveals, que deve ser uma NodeList ou array de elementos DOM.

        {
        var windowHeight = window.innerHeight;//Obtém a altura visível da janela do navegador (em pixels). É útil para saber o tamanho do espaço visível no momento
        var revealTop = reveals[i].getBoundingClientRect().top;//Obtém a posição do topo do elemento atual (reveals[i]) relativo à janela de visualização (viewport).-- retorna informações sobre as dimensões e posição de um elemento.
        var revealPoint = 150;//Define um ponto de referência (em pixels) antes do elemento ser considerado "visível".

        if (revealTop < windowHeight - revealPoint) //Verifica se o topo do elemento (revealTop) está dentro da janela visível menos o ponto de referência (revealPoint). --  Se o topo do elemento estiver dentro desse intervalo, consideramos que o elemento é "visível".
            {
            reveals[i].classList.add("animate")//Adiciona a classe animate ao elemento visível.-- Essa classe geralmente contém animações CSS, como transform, opacity, etc.;
        }

    }

}
//Essa abordagem é eficiente para criar efeitos interativos e responsivos em páginas da web, especialmente em landing pages ou sites com conteúdo dinâmico.