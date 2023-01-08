//Nova Variavel [nome dish, preço dish, nome drink, preço drink, nome dessert, preço dessert, soma]
const arrOrderData = ['', 0, '', 0, '', 0, 0];
const noInput = 'Não fornecido';
let clientName = noInput;
let clientAddress = noInput;
//Função para selecionar Items do menu
function menuCall(touch, itemType) {
    const placeNameInArray = touch.querySelector('h4').innerHTML;
    const placePriceInArray = Number(touch.querySelector('.price').innerHTML.replace('R$ ', '').replace(',', '.'));
    selectAnItem(touch);
    //Quando o item retorar a string 'correspondente', seleciona um item e guarda as informações na arrOrderData
    if (itemType === 'dish') {
        arrOrderData[0] = placeNameInArray;
        arrOrderData[1] = placePriceInArray;
    } else if (itemType === 'drink') {
        arrOrderData[2] = placeNameInArray;
        arrOrderData[3] = placePriceInArray;
    } else {
        arrOrderData[4] = placeNameInArray;
        arrOrderData[5] = placePriceInArray;
    }
    checkingOut();
}
function selectAnItem(touch) {
    const menuSelected = 'menu-selected';
    const elementPastSelected = touch.parentElement.querySelector('.' + menuSelected);
    const touchIonIcon = touch.querySelector('ion-icon').classList;
    if (elementPastSelected !== null) {
        elementPastSelected.classList.remove(menuSelected);
        elementPastSelected.querySelector('ion-icon').classList.add('hide');
    }
    if (elementPastSelected === touch) {
        touch.classList.remove(menuSelected);
        touchIonIcon.add('hide');
    } else {
        touch.classList.add(menuSelected);
        touchIonIcon.remove('hide');
    }
}
//Função para alterar o botão de "Fechar pedido"
function checkingOut() {
    const checkoutDocument = document.getElementById('checkout');
    arrOrderData[6] = (arrOrderData[1] * 100 + arrOrderData[3] * 100 + arrOrderData[5] * 100);
    if (document.querySelectorAll('.menu-selected').length === 3) {
        checkoutDocument.classList.add('chk-available');
        checkoutDocument.innerHTML = "Fechar pedido";
        checkoutDocument.removeAttribute('disabled');
    } else {
        checkoutDocument.classList.remove('chk-available');
        checkoutDocument.innerHTML = "Selecione os 3 itens para fechar o pedido";
        checkoutDocument.setAttribute('disabled', '');
    }
}
//Função para abrir o overlay de revisar o pedido e aplicar mudanças de preços
function chkoutBtn() {
    if (clientName === noInput) {
        clientName = prompt('Digite o seu nome');
        if (clientName === null) {
            clientName = noInput;
        }
    }
    if (clientAddress === noInput) {
        clientAddress = prompt('Digite o seu endereço');
        if (clientAddress === null) {
            clientAddress = noInput;
        }
    }
    document.getElementById('overlay').classList.remove('hide');
    document.getElementById('nome-principal').innerHTML = arrOrderData[0];
    document.getElementById('preco-principal').innerHTML = (arrOrderData[1]).toFixed(2).replace('.', ',');
    document.getElementById('nome-bebida').innerHTML = arrOrderData[2];
    document.getElementById('preco-bebida').innerHTML = (arrOrderData[3]).toFixed(2).replace('.', ',');
    document.getElementById('nome-sobremesa').innerHTML = arrOrderData[4];
    document.getElementById('preco-sobremesa').innerHTML = (arrOrderData[5]).toFixed(2).replace('.', ',');
    document.getElementById('subtotal').innerHTML = "R$ " + (arrOrderData[6] / 100).toFixed(2).replace('.', ',');
}
//Função do botão cancelar do overlay de revisar o pedido
function chkoutBtnCancel() {
    document.getElementById('overlay').classList.add('hide');
}
//Função para encerrar o pedido e encaminhar para o Whatsapp
function chkoutBtnEnd() {
    const subTotal = (arrOrderData[6] / 100).toFixed(2);
    const url = "https://wa.me/5555555555555?text=";
    const whatsappText = encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${arrOrderData[0]}
- Bebida: ${arrOrderData[2]}
- Sobremesa: ${arrOrderData[4]}
Total: R$ ${subTotal}\n
Nome: ${clientName}
Endereço: ${clientAddress}`);
    document.getElementById('btn-chkend').setAttribute('href', url + whatsappText);
}