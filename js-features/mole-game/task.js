const dead = document.getElementById('dead')
const lost = document.getElementById('lost')

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function clearCounters(){
    dead.innerText = 0;
    lost.innerText = 0;
}

for(let i = 1; i <= 9; i++) {
    let el = getHole(i)
    el.addEventListener('click', ()=> {
        if(el.className.includes('hole_has-mole')) {
            +dead.innerText++;
            el.classList.remove("hole_has-mole")
            if(+dead.innerText == 10) {
                alert('Вы выиграли!')
                clearCounters()
            }
        } else {
            +lost.innerText++;
            if(+lost.innerText == 5) {
                alert('Вы проиграли!')
                clearCounters()
            }
        }
    })
}