const allCheckbox = Array.from(document.querySelectorAll('.interest__check'));

allCheckbox.forEach(elem =>{
    elem.addEventListener('change', (e)=>{
        // e.preventDefault;
        if(elem.checked === true){
            elem.closest('.interest').querySelectorAll('.interest__check').forEach(el =>{
                el.checked = true;
            })
        } else{
            elem.closest('.interest').querySelectorAll('.interest__check').forEach(el =>{
                el.checked = false;
            })
        }
        const parentActive = elem.closest(".interests_active");
        if(parentActive){
            const parent = parentActive.previousElementSibling.querySelector('.interest__check');
            const neighbours = parentActive.querySelectorAll('.interest__check');
            let ar = [];
            neighbours.forEach(el =>{
                ar.push(el.checked);
            })
            if(ar.every((element) => element === true)){
                parent.checked = true;
                parent.indeterminate = false;
            } else if(ar.some((element) => element === true)){
                parent.checked = false;
                parent.indeterminate = true;
            } else if(ar.every((element) => element === false)){
                parent.checked = false;
                parent.indeterminate = false;
            }
        }
    })
})