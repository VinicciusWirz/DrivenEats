let numeroSelecoes = [];
let nomePrincipal = "";
let precoPrincipal = 0;
let nomeBebida = "";
let precoBebida = 0;
let nomeSobremesa = "";
let precoSobremesa = 0;
//let endereco = "";
//let nome = "";

//Função para selecionar os items do menu de Pratos Principais
function menuPrincipal(selecionado){
   const elementPrincipal = document.querySelector('.opcoesPrincipais>.menu-selected');
   
   if(precoPrincipal !== 0 ){
    precoPrincipal = 0;
    }
   if(elementPrincipal !== null){
    elementPrincipal.classList.remove('menu-selected');
    elementPrincipal.querySelector('ion-icon').classList.add('hide');
    if(numeroSelecoes.includes(1)){
        numeroSelecoes.splice(numeroSelecoes.indexOf(1), 1);
    }
   } 
   if(elementPrincipal == selecionado){
    selecionado.classList.remove('menu-selected');
    selecionado.querySelector('ion-icon').classList.add('hide');
   } else if (selecionado.classList.contains('menu-selected')){
    selecionado.classList.remove('menu-selected');
    selecionado.querySelector('ion-icon').classList.add('hide');
   } else {
    selecionado.classList.add('menu-selected');
    selecionado.querySelector('ion-icon').classList.remove('hide');
    if(!numeroSelecoes.includes(1)){
        numeroSelecoes.push(1);
    }
    precoPrincipal = Number(selecionado.querySelector('.price').innerHTML.replace('R$ ', '').replace(',', '.')).toFixed(2);
    nomePrincipal = selecionado.querySelector('h4').innerHTML;
   }
}
//Função para selecionar os items do menu de Bebidas
function menuBebidas(selecionado){
    const elementPrincipal = document.querySelector('.opcoesBebidas>.menu-selected');
   
    if(precoBebida !== 0 ){
     precoBebida = 0;
     }
    if(elementPrincipal !== null){
     elementPrincipal.classList.remove('menu-selected');
     elementPrincipal.querySelector('ion-icon').classList.add('hide');
     if(numeroSelecoes.includes(2)){
         numeroSelecoes.splice(numeroSelecoes.indexOf(2), 1);
     }
    } 
    if(elementPrincipal == selecionado){
     selecionado.classList.remove('menu-selected');
     selecionado.querySelector('ion-icon').classList.add('hide');
    } else if (selecionado.classList.contains('menu-selected')){
     selecionado.classList.remove('menu-selected');
     selecionado.querySelector('ion-icon').classList.add('hide');
    } else {
     selecionado.classList.add('menu-selected');
     selecionado.querySelector('ion-icon').classList.remove('hide');
     if(!numeroSelecoes.includes(2)){
         numeroSelecoes.push(2);
     }
     precoBebida = Number(selecionado.querySelector('.price').innerHTML.replace('R$ ', '').replace(',', '.')).toFixed(2);
     nomeBebida = selecionado.querySelector('h4').innerHTML;
    }
}
//Função para selecionar os items do menu de Sobremesas
function menuSobremesas(selecionado){
    const elementPrincipal = document.querySelector('.opcoesSobremesas>.menu-selected');
   
    if(precoSobremesa !== 0 ){
     precoSobremesa = 0;
     }
    if(elementPrincipal !== null){
     elementPrincipal.classList.remove('menu-selected');
     elementPrincipal.querySelector('ion-icon').classList.add('hide');
     if(numeroSelecoes.includes(3)){
         numeroSelecoes.splice(numeroSelecoes.indexOf(3), 1);
     }
    } 
    if(elementPrincipal == selecionado){
     selecionado.classList.remove('menu-selected');
     selecionado.querySelector('ion-icon').classList.add('hide');
    } else if (selecionado.classList.contains('menu-selected')){
     selecionado.classList.remove('menu-selected');
     selecionado.querySelector('ion-icon').classList.add('hide');
    } else {
     selecionado.classList.add('menu-selected');
     selecionado.querySelector('ion-icon').classList.remove('hide');
     if(!numeroSelecoes.includes(3)){
         numeroSelecoes.push(3);
     }
     precoSobremesa = Number(selecionado.querySelector('.price').innerHTML.replace('R$ ', '').replace(',', '.')).toFixed(2);
     nomeSobremesa = selecionado.querySelector('h4').innerHTML;
    }
}
