let numeroSelecoes = [];
let nomePrincipal = "";
let precoPrincipal = 0;
let nomeBebida = "";
let precoBebida = 0;
let nomeSobremesa = "";
let precoSobremesa = 0;
let endereco = "";
let nome = "";

//Função para selecionar os items do menu de Pratos Principais
function menuPrincipal(selecionado){
    const elementPrincipal = document.querySelector('.opcoesPrincipais>.menu-selected');
    const element = document.querySelector(selecionado);
    const checkmark = document.querySelector(selecionado + ">ion-icon");

    if (elementPrincipal !== null){
        document.querySelector('.opcoesPrincipais>.menu-selected>ion-icon').classList.add('hide');
        elementPrincipal.classList.remove('menu-selected');
    }
    if(elementPrincipal == element){
        element.classList.remove('menu-selected');
        checkmark.classList.add('hide');
    } else if (element.classList.contains('menu-selected')){
        element.classList.remove('menu-selected');
        checkmark.classList.add('hide');
    } else {
        element.classList.add('menu-selected');
        checkmark.classList.remove('hide');
    }   
}
//Função para selecionar os items do menu de Bebidas
function menuBebidas(selecionado){
    const elementPrincipal = document.querySelector('.opcoesBebidas>.menu-selected');
    const element = document.querySelector(selecionado);
    const checkmark = document.querySelector(selecionado + ">ion-icon");

    if (elementPrincipal !== null){
        document.querySelector('.opcoesBebidas>.menu-selected>ion-icon').classList.add('hide');
        elementPrincipal.classList.remove('menu-selected');
    }
    if(elementPrincipal == element){
        element.classList.remove('menu-selected');
        checkmark.classList.add('hide');
    } else if (element.classList.contains('menu-selected')){
        element.classList.remove('menu-selected');
        checkmark.classList.add('hide');
    } else {
        element.classList.add('menu-selected');
        checkmark.classList.remove('hide');
    }
}
//Função para selecionar os items do menu de Sobremesas
function menuSobremesas(selecionado){
    const elementPrincipal = document.querySelector('.opcoesSobremesas>.menu-selected');
    const element = document.querySelector(selecionado);
    const checkmark = document.querySelector(selecionado + ">ion-icon");

    if (elementPrincipal !== null){
        document.querySelector('.opcoesSobremesas>.menu-selected>ion-icon').classList.add('hide');
        elementPrincipal.classList.remove('menu-selected');
    }
    if(elementPrincipal == element){
        element.classList.remove('menu-selected');
        checkmark.classList.add('hide');
    } else if (element.classList.contains('menu-selected')){
        element.classList.remove('menu-selected');
        checkmark.classList.add('hide');
    } else {
        element.classList.add('menu-selected');
        checkmark.classList.remove('hide');
    }
}