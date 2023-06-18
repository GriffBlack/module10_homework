const wsUri = "wss://echo-ws-service.herokuapp.com";
let socket = new WebSocket(wsUri);

let inputText = document.querySelector('input');
let sendBtn = document.querySelector('.send');
let geoBtn = document.querySelector('.btn_location');
let mainMsg = document.querySelector('.message_main');
        
socket.onopen = () => {
    console.log("Соединение открыто");
    }
socket.onclose = () => {
    console.log("Соединение закрыто");
    inputText.disabled = true;
    sendBtn.disabled = true;
    }
socket.onerror = (err) => {
    console.log(`Произошла ошибка - ${err.data}`);
    }
socket.onmessage = (mes) => {
    console.log('Получены данные');
    serverMessage(mes.data);
}
    
sendBtn.addEventListener('click', () => {
    if (inputText.value === '') {
        alert("Введите сообщение в текстовое поле");
    }
    else {
        senderMessage(inputText.value);
        socket.send(inputText.value);
    }
})

geoBtn.addEventListener('click', () => {
    sendGeoLocation();
})
function serverMessage(message) {
    let newMessage = document.createElement('div');
    newMessage.className = 'server';
    newMessage.innerHTML = `<p>${message}</p>`;
    mainMsg.append(newMessage);
    inputText.value = '';
}

function sendGeoLocation() {
    if (!'geolocation' in navigator) {
        console.log("геолокация не поддерживается");
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

function senderMessage(message) {
    let newMessage = document.createElement('div');
    newMessage.className = 'sender';
    newMessage.innerHTML = `<p>${message}</p>`;
    mainMsg.append(newMessage);
}

function success(position) {
    let long = position.coords.longitude;
    let lat = position.coords.latitude;
    console.log(`ширина - ${lat}, долгота - ${long}`)
    let newMessage = document.createElement('div');
    newMessage.className = 'sender';
    newMessage.innerHTML = `<a href="https://www.openstreetmap.org/#map=19/${lat}/${long}" target="_blank">Геолокация</a>`;
    mainMsg.append(newMessage);
}
function error(e) {
    if (e.code == 1) {
        console.log('Доступ к геопозиции отказан');
    }
    console.log(e);
}