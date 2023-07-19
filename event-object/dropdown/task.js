const btn = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const nestedList = Array.from(document.querySelectorAll('.dropdown__item'))
btn.addEventListener('click', (e) => {
    e.preventDefault();
    list.classList.toggle('dropdown__list_active')
})

nestedList.forEach((el) => {
    el.addEventListener('click', (e) =>{
        e.preventDefault();
        btn.innerText = el.firstElementChild.innerText;
        list.classList.toggle('dropdown__list_active')
    })
})
