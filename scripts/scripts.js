//Nova Variavel [nome dish, preço dish, nome drink, preço drink, nome dessert, preço dessert, soma]
const arrOrderData = ['', 0, '', 0, '', 0, 0];
const noInput = 'Não fornecido';
let clientName = noInput;
let clientAddress = noInput;
//Função para selecionar Items do menu
function menuCall(touch, itemType) {
    const menuSelected = 'menu-selected';
    const elementPastSelected = touch.parentElement.querySelector('.' + menuSelected);
    const touchClassCheck = elementPastSelected === touch;
    const placeNameInArray = touch.querySelector('h4').innerHTML;
    const placePriceInArray = Number(touch.querySelector('.price').innerHTML.replace('R$ ', '').replace(',', '.'));
    //Quando o item retorar a string 'dish', seleciona um item do principal e guarda as informações na arrOrderData
    if (itemType === 'dish') {
        if (elementPastSelected !== null) {
            elementPastSelected.classList.remove(menuSelected);
            elementPastSelected.querySelector('ion-icon').classList.add('hide');
        }
        if (touchClassCheck) {
            touch.classList.remove(menuSelected);
            touch.querySelector('ion-icon').classList.add('hide');
            arrOrderData[0] = '';
            arrOrderData[1] = 0;
        } else {
            touch.classList.add(menuSelected);
            touch.querySelector('ion-icon').classList.remove('hide');
            //Adiciona nome do Dish na array
            arrOrderData[0] = placeNameInArray;
            //Adiciona preço do Dish na array
            arrOrderData[1] = placePriceInArray;
        }
    }
    //Quando o item retorar a string 'drink', seleciona um item da bebida e guarda as informações na arrOrderData
    if (itemType === 'drink') {
        if (elementPastSelected !== null) {
            elementPastSelected.classList.remove(menuSelected);
            elementPastSelected.querySelector('ion-icon').classList.add('hide');
        }
        if (touchClassCheck) {
            touch.classList.remove(menuSelected);
            touch.querySelector('ion-icon').classList.add('hide');
            arrOrderData[2] = '';
            arrOrderData[3] = 0;
        } else {
            touch.classList.add(menuSelected);
            touch.querySelector('ion-icon').classList.remove('hide');
            //Adiciona nome do Drink na array
            arrOrderData[2] = placeNameInArray;
            //Adiciona preço do Drink na array
            arrOrderData[3] = placePriceInArray;
        }
    }
    //Quando o item retorar a string 'dessert', seleciona um item da sobremesa e guarda as informações na arrOrderData
    if (itemType === 'dessert') {
        if (elementPastSelected !== null) {
            elementPastSelected.classList.remove(menuSelected);
            elementPastSelected.querySelector('ion-icon').classList.add('hide');
        }
        if (touchClassCheck) {
            touch.classList.remove(menuSelected);
            touch.querySelector('ion-icon').classList.add('hide');
            arrOrderData[4] = '';
            arrOrderData[5] = 0;
        } else {
            touch.classList.add(menuSelected);
            touch.querySelector('ion-icon').classList.remove('hide');
            //Adiciona nome do Dessert na array
            arrOrderData[4] = placeNameInArray;
            //Adiciona preço do Dessert na array
            arrOrderData[5] = placePriceInArray;
        }
    }
    arrOrderData[6] = (arrOrderData[1] * 100 + arrOrderData[3] * 100 + arrOrderData[5] * 100);
    checkingOut();
}
//Função para alterar o botão de "Fechar pedido"
function checkingOut() {
    const checkoutDocument = document.getElementById('checkout');
    if (arrOrderData[1] !== 0 && arrOrderData[3] !== 0 && arrOrderData[5] !== 0) {
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
    document.getElementById('preco-principal').innerHTML = (arrOrderData[1]).toFixed(2).toString().replace('.', ',');
    document.getElementById('nome-bebida').innerHTML = arrOrderData[2];
    document.getElementById('preco-bebida').innerHTML = (arrOrderData[3]).toFixed(2).toString().replace('.', ',');
    document.getElementById('nome-sobremesa').innerHTML = arrOrderData[4];
    document.getElementById('preco-sobremesa').innerHTML = (arrOrderData[5]).toFixed(2).toString().replace('.', ',');
    document.getElementById('subtotal').innerHTML = "R$ " + (arrOrderData[6] / 100).toFixed(2).toString().replace('.', ',');
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