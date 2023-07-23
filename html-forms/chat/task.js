const chat = document.querySelector('.chat-widget');
const inputMessage = document.querySelector('.chat-widget__input');
const chatContainer = document.querySelector('.chat-widget__messages');
const BOT_MSG = ['ЧЕ?', 'Ты мне уже надоел', 'Ты будешь уже что-то покупать или нет?' ];


const msgHTML = (text, time, isClient = false) => `<div class="message ${isClient ? 'message_client' : ''}">
<div class="message__time">${time}</div>
<div class="message__text">${text}</div>
</div>`

const currentTime = () => {
    const currentDate = new Date;
    return `${currentDate.getHours()}:${currentDate.getMinutes()}`;
}
const getRandom = (list) => {
    return list[Math.floor((Math.random()*list.length))];
  }

chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
})

inputMessage.addEventListener('keypress', (e) => {
    if (e.keyCode === 13 && inputMessage.value !== ''){
        chatContainer.innerHTML += msgHTML(inputMessage.value, currentTime(), true);
        chatContainer.innerHTML += msgHTML(getRandom(BOT_MSG), currentTime());
        inputMessage.value = '';
    }
})

