let cookie = document.getElementById('cookie');
let elemClickerStatus = document.getElementById('clicker__counter')
cookie.onclick = function(){
    cookie.width = cookie.width === 400 ? 200 : 400;
    elemClickerStatus.innerText = ++elemClickerStatus.innerText;
}