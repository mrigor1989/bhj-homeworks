const dead = document.getElementById('dead')
const lost = document.getElementById('lost')

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function clearCounters(){
    dead.innerText = 0;
    lost.innerText = 0;
}

for(let i = 1; i < 10; i++) {
    let el = getHole(i)
    el.addEventListener('click', ()=> {
        if(el.className.includes('hole_has-mole')) {
            +dead.innerText++;
            if(+dead.innerText == 10) {
                alert('win')
                clearCounters()
            }
        } else {
            +lost.innerText++;
            if(+lost.innerText == 5) {
                alert('you have lost')
                clearCounters()
            }
        }
    })
}