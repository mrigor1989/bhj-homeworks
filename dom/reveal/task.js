const reveal = document.querySelector('.reveal');

addEventListener('scroll', () => {
    let {top, bottom} = reveal.getBoundingClientRect();
    
    if (bottom < 0 || top > window.innerHeight){
        reveal.classList.remove('reveal_active');
        console.log('элемент не виден')
        return;
    }
    reveal.classList.add('reveal_active');
    console.log('элемент виден')
})
