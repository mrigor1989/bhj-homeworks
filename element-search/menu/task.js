const menuActive = Array.from(document.querySelectorAll('.menu__link'))
menuActive.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault()
        const menu = el.nextElementSibling
        if(menu.classList.contains('menu_sub')){
            menu.classList.toggle('menu_active')
        }
        
    })
})

// const menuActive = Array.from(document.querySelectorAll('.menu__link'));

// menuActive.forEach((el) => {
//   el.addEventListener('click', (e) => {
//     e.preventDefault();
//     const menu = el.nextElementSibling;

//     // if (menu.classList.contains('menu_sub')) {
//     //   menu.classList.add('menu_active');
//     // }

//     if (menu.classList.contains('menu_sub')) {
//       menu.classList.toggle('menu_active');
//     }
//   })
// })