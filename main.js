// Show and hide menu 

const menuButton = document.querySelector('div.menu');
const menuClose = document.querySelector('li.close');
const menuMobile = document.querySelector('.menu-mobile');

menuButton.addEventListener('click', function () {
    menuMobile.classList.toggle('active');
    console.log('dziala')
});

menuClose.addEventListener('click', function () {
    menuMobile.classList.toggle('active');
    console.log('dziala')
});

// Display cart 

const cartMobile = document.querySelector('div.cart img');
const cartDesktop = document.querySelector('li.cartTopPanel img');
const cartContent = document.querySelector('div.displayCart');

const displayCart = function () {
    cartContent.classList.toggle('active');
}
cartMobile.addEventListener('click', displayCart);
cartDesktop.addEventListener('click', displayCart);

// show/hide big foto 

const cross = document.querySelector('div.cross svg');
const bigPhoto = document.querySelector('.productShow');
const productPhoto = document.querySelector('img.photoBox');


cross.addEventListener('click', function () {
    bigPhoto.classList.remove('active');
});

productPhoto.addEventListener('click', function () {
    bigPhoto.classList.add('active');
    cartContent.classList.remove('active');
});

//change photo in description 

const photoContainter = document.querySelector('.photoBox');
const desktopGallery = [...document.querySelectorAll('.desktop-gallery img')];

const photoSources = ['images/image-product-1.jpg', 'images/image-product-2.jpg', 'images/image-product-3.jpg', 'images/image-product-4.jpg'];

let currentSource = 'images/image-product-1.jpg';

const changeDescriptionPhoto = function (src) {
    photoContainter.src = src;
    productShownPhoto.src = src;
    productShowGallery.forEach(function (item) {
        item.classList.remove('active')
    });

    productShowGallery.forEach(function (item) {
        if (item.src === src) {
            item.classList.add('active');
        }
    });

}

const getSource = function (e) {
    currentSource = this.src;
    desktopGallery.forEach(function (item) {
        item.classList.remove('active')
    });
    this.classList.add('active');
    changeDescriptionPhoto(currentSource);
}

desktopGallery.forEach(function (photo) {
    photo.addEventListener('click', getSource);
})

//change photo in product show
const productShownPhoto = document.querySelector('.productShow-bigPhoto img');
const productShowGallery = [...document.querySelectorAll('.productShow-gallery img')];


const changeShownPhoto = function (src) {
    productShownPhoto.src = src;
}

const getSourceShownPhoto = function (e) {
    currentSource = this.src;
    productShowGallery.forEach(function (item) {
        item.classList.remove('active')
    });
    this.classList.add('active');
    changeShownPhoto(currentSource);
}

productShowGallery.forEach(function (photo) {
    photo.addEventListener('click', getSourceShownPhoto);
})

// changing photos by arrows

const arrows = [...document.querySelectorAll('.productShow-bigPhoto div')];

let currentIndex = 0;
const getIndex = function () {
    for (let i = 0; i < photoSources.length; i++) {
        if (currentSource.includes(photoSources[i])) {
            currentIndex = i;
            console.log(currentIndex);
        }
    }
}


const changePhotoArrow = function () {
    getIndex();
    if (this.className == 'right') {
        currentIndex >= 3 ? currentIndex = 0 : currentIndex++;
    } else {
        currentIndex <= 0 ? currentIndex = 3 : currentIndex--;
    }

    productShownPhoto.src = photoSources[currentIndex];
         currentSource=photoSources[currentIndex];
             productShowGallery.forEach(function (item) {
        item.classList.remove('active')
    });
         productShowGallery[currentIndex].classList.add('active');

};

arrows.forEach(function (arrow) {
    arrow.addEventListener('click', changePhotoArrow);
});