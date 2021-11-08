
// Show and hide menu 

const menuButton = document.querySelector('div.menu');
const menuClose = document.querySelector('li.close');
const menuMobile = document.querySelector('.menu-mobile');

menuButton.addEventListener('click', function(){
menuMobile.classList.toggle('active');
console.log('dziala')
});

menuClose.addEventListener('click', function(){
menuMobile.classList.toggle('active');
console.log('dziala')
});

// Display cart 

const cartMobile = document.querySelector('div.cart img');
const cartDesktop = document.querySelector('li.cartTopPanel img');
const cartContent = document.querySelector('div.displayCart');

const displayCart=function(){
cartContent.classList.toggle('active');
}
cartMobile.addEventListener('click', displayCart);
cartDesktop.addEventListener('click', displayCart);

// show/hide big foto 

const cross = document.querySelector('div.cross svg');
const bigPhoto = document.querySelector('.productShow');
const productPhoto = document.querySelector('img.photoBox');


cross.addEventListener('click', function(){
bigPhoto.classList.remove('active');
});

productPhoto.addEventListener('click',function(){
bigPhoto.classList.add('active');
cartContent.classList.remove('active');
}); 


