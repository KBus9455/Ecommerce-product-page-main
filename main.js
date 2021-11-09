
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

//change photo in description 

const photoContainter = document.querySelector('.photoBox');
const desktopGallery = [...document.querySelectorAll('.desktop-gallery img')];

const photoSources = ['images/image-product-1.jpg','images/image-product-2.jpg','images/image-product-3.jpg','images/image-product-4.jpg'];

let currentSource;

const changePhoto = function(src){
photoContainter.src = src;
}


const getSource = function(e){
   currentSource=this.src;
   changePhoto(currentSource);
}

desktopGallery.forEach(function(photo){
photo.addEventListener('click', getSource);
})

