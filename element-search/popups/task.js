const modals = document.querySelectorAll('.modal');
const modalMain = document.querySelector('#modal_main');
const modalSuccess = document.querySelector('#modal_success')
modalMain.classList.add('modal_active');

modals.forEach(el => {
    el.addEventListener('click', (elem) =>{
        if(elem.target.classList.contains('modal__close')){
            el.classList.remove('modal_active')                
        }
        if(elem.target.classList.contains('show-success')){
            modalSuccess.classList.add('modal_active')
        } 
    })
})







