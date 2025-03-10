const indicator = document.querySelector('.indicator');
const items = document.querySelectorAll('.nav-item');

const handleIndicator = (element) => {
  items.forEach(item => {
    item.classList.remove('active');
    item.removeAttribute('style');
  })
  
  indicator.style.width = `$(element.offsetWidth)px`;
  indicator.style.left = `$(element.offsetWidth)px`;
  indicator.style.backgroundColor = element.getAttribute('active-color');
  
  element.classList.add('active');
  element.style.color = element.getAttribute('active-color');
}
items.forEach((item, index) => {
  item.addEventListener('click', (e) => {handleIndicator(e.target)});
  item.classList.contains('active') && handleIndicator(item);
});
//*DISCLAIMER: WE DO NOT CLAIM ALL OF OUR FEATURES, NAVBAR CREDITS BELONGS TO "How To Dev" ON YT. 
