let numeroSelecoes = [];
let nomePrincipal = "";
let precoPrincipal = 0;
let nomeBebida = "";
let precoBebida = 0;
let nomeSobremesa = "";
let precoSobremesa = 0;
let subTotal = 0;
let clientName = "";
let clientAddress = "";

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
   checkingOut();
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
    checkingOut();
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
    checkingOut();
}
//Função para alterar o botão de "Fechar pedido"
function checkingOut(){
    if(numeroSelecoes.length === 3){
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
    if(numeroSelecoes.length === 3){
        if(clientName === "" && clientAddress === ""){
            clientName = prompt('Digite o seu nome');
            clientAddress = prompt('Digite o seu endereço');
        }
        subTotal = (Number(precoPrincipal) + Number(precoBebida) + Number(precoSobremesa));
        document.getElementById('overlay').classList.remove('hide');
        document.getElementById('nome-principal').innerHTML = nomePrincipal;
        document.getElementById('preco-principal').innerHTML = precoPrincipal.toString().replace('.', ',');
        document.getElementById('nome-bebida').innerHTML = nomeBebida;
        document.getElementById('preco-bebida').innerHTML = precoBebida.toString().replace('.', ',');
        document.getElementById('nome-sobremesa').innerHTML = nomeSobremesa;
        document.getElementById('preco-sobremesa').innerHTML = precoSobremesa.toString().replace('.', ',');
        document.getElementById('subtotal').innerHTML = "R$ " + subTotal.toFixed(2).toString().replace('.', ',');
    }
}
//Função do botão cancelar do overlay de revisar o pedido
function chkoutBtnCancel(){
    document.getElementById('overlay').classList.add('hide');
}
//Função para encerrar o pedido e encaminhar para o Whatsapp
function chkoutBtnEnd(){
    subTotal = subTotal.toFixed(2);
    let url ="https://wa.me/5555555555555?text=";
    let whatsappText = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${nomePrincipal}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: R$ ${subTotal}\n\nNome: ${clientName}\nEndereço: ${clientAddress}`);

    let link = url + whatsappText;
    document.getElementById('btn-chkend').setAttribute('href', link);
}