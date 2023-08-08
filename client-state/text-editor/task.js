const editor = document.getElementById('editor');
const clearKey = document.getElementById('clearKey');
const clearAll = document.getElementById('clearAll');

editor.addEventListener('input', saveTxt);
window.addEventListener('load', txtLocalStorage);
clearKey.addEventListener('click', clear);
clearAll.addEventListener('click', clear);

function saveTxt() {
    localStorage.text = editor.value;
}

function txtLocalStorage() {
    if (localStorage.text) {
        editor.value = localStorage.text;
    }
}

function clear(e) {

    e.preventDefault();

    if (e.target === clearKey) {
        localStorage.removeItem('text');
        editor.value = '';
    } else {
        localStorage.clear();
        editor.value = '';
    }
}
