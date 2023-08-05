const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach(elem => {
 elem.addEventListener('click', (e) => {
  e.preventDefault();

  let tooltip = document.querySelector('.tooltip');
  let {top, left} = elem.getBoundingClientRect();

  if(!tooltip){
   elem.insertAdjacentElement('afterend', tooltips(elem.title, top, left));
  }else{
   tooltip.remove();
  }
 })
})

const tooltips = (title, top, left) => {
 let tooltip = document.createElement('div');
 tooltip.textContent = title;
 tooltip.classList.add('tooltip');
 tooltip.classList.toggle('tooltip_active');
 tooltip.style.left = left + 'px';
 tooltip.style.top = (top + 20) + 'px';
    return tooltip;
}