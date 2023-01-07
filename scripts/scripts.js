const numeroSelecoes = [0, 0, 0];
let nomePrincipal = "";
let precoPrincipal = 0;
let nomeBebida = "";
let precoBebida = 0;
let nomeSobremesa = "";
let precoSobremesa = 0;
let subTotal = 0;
let clientName = "Não fornecido";
let clientAddress = "Não fornecido";
//Função para selecionar os items do menu de Pratos Principais
function menuPrincipal(selecionado){
   const elementPrincipal = document.querySelector('.opcoesPrincipais>.menu-selected');
   const menuSelected = 'menu-selected';
   if(precoPrincipal !== 0 ){
    precoPrincipal = 0;
    }
   if(elementPrincipal !== null){
    elementPrincipal.classList.remove(menuSelected);
    elementPrincipal.querySelector('ion-icon').classList.add('hide');
    if(numeroSelecoes.includes(1)){
        numeroSelecoes[0] = 0;
    }
   }
   if(elementPrincipal === selecionado || selecionado.classList.contains(menuSelected)){
    selecionado.classList.remove(menuSelected);
    selecionado.querySelector('ion-icon').classList.add('hide');
   } else {
    selecionado.classList.add(menuSelected);
    selecionado.querySelector('ion-icon').classList.remove('hide');
    if(!numeroSelecoes.includes(1)){
        numeroSelecoes[0] = 1;
    }
    precoPrincipal = Number(selecionado.querySelector('.price').innerHTML.replace('R$ ', '').replace(',', '.')*100);
    nomePrincipal = selecionado.querySelector('h4').innerHTML;
   }
   checkingOut();
}
//Função para selecionar os items do menu de Bebidas
function menuBebidas(selecionado){
    const elementPrincipal = document.querySelector('.opcoesBebidas>.menu-selected');
    const menuSelected = 'menu-selected';
    if(precoBebida !== 0 ){
     precoBebida = 0;
    }
    if(elementPrincipal !== null){
     elementPrincipal.classList.remove(menuSelected);
     elementPrincipal.querySelector('ion-icon').classList.add('hide');
     if(numeroSelecoes.includes(2)){
        numeroSelecoes[1] = 0;
     }
    }
    if(elementPrincipal === selecionado || selecionado.classList.contains(menuSelected)){
        selecionado.classList.remove(menuSelected);
        selecionado.querySelector('ion-icon').classList.add('hide');
    } else {
     selecionado.classList.add(menuSelected);
     selecionado.querySelector('ion-icon').classList.remove('hide');
     if(!numeroSelecoes.includes(2)){
         numeroSelecoes[1] = 2;
     }
     precoBebida = Number(selecionado.querySelector('.price').innerHTML.replace('R$ ', '').replace(',', '.')*100);
     nomeBebida = selecionado.querySelector('h4').innerHTML;
    }
    checkingOut();
}
//Função para selecionar os items do menu de Sobremesas
function menuSobremesas(selecionado){
    const elementPrincipal = document.querySelector('.opcoesSobremesas>.menu-selected');
    const menuSelected = 'menu-selected';
    if(precoSobremesa !== 0 ){
     precoSobremesa = 0;
     }
    if(elementPrincipal !== null){
     elementPrincipal.classList.remove(menuSelected);
     elementPrincipal.querySelector('ion-icon').classList.add('hide');
     if(numeroSelecoes.includes(3)){
        numeroSelecoes[2] = 0;
     }
    }
    if(elementPrincipal === selecionado || selecionado.classList.contains(menuSelected)){
        selecionado.classList.remove(menuSelected);
        selecionado.querySelector('ion-icon').classList.add('hide');
    } else {
     selecionado.classList.add(menuSelected);
     selecionado.querySelector('ion-icon').classList.remove('hide');
     if(!numeroSelecoes.includes(3)){
         numeroSelecoes[2] = 3;
     }
     precoSobremesa = Number(selecionado.querySelector('.price').innerHTML.replace('R$ ', '').replace(',', '.')*100);
     nomeSobremesa = selecionado.querySelector('h4').innerHTML;
    }
    checkingOut();
}
//Função para alterar o botão de "Fechar pedido"
function checkingOut(){
    if(numeroSelecoes.includes(1) && numeroSelecoes.includes(2) && numeroSelecoes.includes(3)){
        document.getElementById('checkout').classList.add('chk-available');
        document.getElementById('checkout').innerHTML = "Fechar pedido";
        document.getElementById('checkout').removeAttribute('disabled');
    } else {
        document.getElementById('checkout').classList.remove('chk-available');
        document.getElementById('checkout').innerHTML = "Selecione os 3 itens para fechar o pedido";
        document.getElementById('checkout').setAttribute('disabled', '');
    }
}
//Função para abrir o overlay de revisar o pedido e aplicar mudanças de preços
function chkoutBtn(){
        if(clientName === "Não fornecido"){
            clientName = prompt('Digite o seu nome');
            if(clientName === null){
                clientName = "Não fornecido";
            }
        }
        if(clientAddress === "Não fornecido"){
            clientAddress = prompt('Digite o seu endereço');
            if(clientAddress === null){
                clientAddress = "Não fornecido";
            }
        }
        subTotal = (precoPrincipal + precoBebida + precoSobremesa)/100;
        document.getElementById('overlay').classList.remove('hide');
        document.getElementById('nome-principal').innerHTML = nomePrincipal;
        document.getElementById('preco-principal').innerHTML = (precoPrincipal/100).toFixed(2).toString().replace('.', ',');
        document.getElementById('nome-bebida').innerHTML = nomeBebida;
        document.getElementById('preco-bebida').innerHTML = (precoBebida/100).toFixed(2).toString().replace('.', ',');
        document.getElementById('nome-sobremesa').innerHTML = nomeSobremesa;
        document.getElementById('preco-sobremesa').innerHTML = (precoSobremesa/100).toFixed(2).toString().replace('.', ',');
        document.getElementById('subtotal').innerHTML = "R$ " + subTotal.toFixed(2).toString().replace('.', ',');
}
//Função do botão cancelar do overlay de revisar o pedido
function chkoutBtnCancel(){
    document.getElementById('overlay').classList.add('hide');
}
//Função para encerrar o pedido e encaminhar para o Whatsapp
function chkoutBtnEnd(){
    subTotal = subTotal.toFixed(2);
    const url ="https://wa.me/5555555555555?text=";
    const whatsappText = encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${nomePrincipal}
- Bebida: ${nomeBebida}
- Sobremesa: ${nomeSobremesa}
Total: R$ ${subTotal}\n
Nome: ${clientName}
Endereço: ${clientAddress}`);
    document.getElementById('btn-chkend').setAttribute('href', url + whatsappText);
}