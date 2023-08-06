'use strict'
const items = document.getElementById('items')
const loader = document.querySelector('.loader')
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses'

fetch(url)
    .then((data) => data.text())
    .then(function (data) {
        loader.classList.remove('loader_active')
        let valute = JSON.parse(data).response.Valute
        for (let key in valute) {
            items.innerHTML += ` <div class="item">
                 <div class="item__code">${valute[key].CharCode}</div>
                 <div class="item__value">${valute[key].Value}</div>
                 <div class="item__currency">руб.</div>
                 <div></div>`
        }
    })