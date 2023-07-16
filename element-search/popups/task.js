const modal = document.getElementById('modal_main');
modal.classList.add('modal_active');
modal.addEventListener('click', () => {
    modal.classList.add('modal_close')
})