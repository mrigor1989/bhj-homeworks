
// document.querySelector('.products').addEventListener('click', e => {
//     if (e.target.classList.contains('product__quantity-control_dec')) {
//       alert(11)
//       product__quantity-control_dec
//     }
//   });


const productList = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

productList.forEach((productElem) => {
    let productId = productElem.dataset.id;
    const valueElem = productElem.querySelector('.product__quantity-value');
    const btnDec = productElem.querySelector('.product__quantity-control_dec');
    const btnInc = productElem.querySelector('.product__quantity-control_inc');
    const imgSrc = productElem.querySelector('.product__image').src;
    const addProductBtn = productElem.querySelector('.product__add');
    btnDec.addEventListener('click', () => {
        if (+valueElem.innerHTML > 1) {
            valueElem.innerHTML = valueElem.innerHTML - 1;
        }
    })
    btnInc.addEventListener('click', () => {
        valueElem.innerHTML = +valueElem.innerHTML + 1;
    })
    addProductBtn.addEventListener('click', () => {
        const product = getCard(productId)
        if(product) {
            product.querySelector('.cart__product-count').innerHTML = +product.querySelector('.cart__product-count').innerHTML + +valueElem.innerHTML; 
        } else {
        cart.innerHTML += cartProductHTML(productId, imgSrc, valueElem.innerHTML)
        }
    })
})

const cartProductHTML = (id, imgSrc, count) => (`<div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${imgSrc}">
                <div class="cart__product-count">${count}</div>
            </div>`)



function getCard(i){
    return document.querySelector(`.cart__product[data-id="${i}"`);
}
