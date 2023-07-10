let elem = document.getElementById('timer');
let count = +elem.innerText;
let timer = setInterval(()=>{
    if(--count < 0) {
        clearInterval(timer);
        alert('Вы победили в конкурсе!');
        return;
    }
    elem.innerText = count;   
},1000);