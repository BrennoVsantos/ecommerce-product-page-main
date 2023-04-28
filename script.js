const body = document.querySelector('body');

const cartBtn = document.querySelector('#cart');
const cartContainer = document.querySelector('.cart-container');
const cartInfo = document.querySelector('.cart-info');
const apagaCart = document.querySelector('#apagar');

const product = document.querySelector('.preview');

const notify = document.querySelector('#notify');

const telaPreview = document.querySelector('.preview');

const preview1 = document.querySelector('#preview1');
const preview2 = document.querySelector('#preview2');
const preview3 = document.querySelector('#preview3');
const preview4= document.querySelector('#preview4');

const modalContainer = document.querySelector('.modal-container');
const modalPreview = document.querySelector('.modal-preview-screen ');
const modalThumb1 = document.querySelector('.modal-btn1');
const modalThumb2 = document.querySelector('.modal-btn2');
const modalThumb3 = document.querySelector('.modal-btn3');
const modalThumb4 = document.querySelector('.modal-btn4');
const modalNext = document.querySelector('.modal-next');
const modalPrev = document.querySelector('.modal-prev');
const closeModal = document.querySelector('.close-modal');


const qtd = document.querySelector('.result');

const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');

const checkoutBtn = document.querySelector('#add-product');
const checkoutQtd = document.querySelector('#qtd');
const checkoutTotal = document.querySelector('#checkout-total');

const btnVolta = document.querySelector('.volta');
const btnAvanca = document.querySelector('.avanca');

const hamburguerBtn = document.querySelector('#hamburguer');
const mobNavContainer = document.querySelector('#mob-nav-container');
const mobNav = document.querySelector('.mob-nav');
const mobNavLinks = document.querySelectorAll('.mob-nav-links');

let contaPaginas = 1;
let quantidade = 0;

let contaPaginasModal = 1;

cartBtn.addEventListener('click', () => {
    cartContainer.classList.toggle('cart-on');
})

plusBtn.addEventListener('click', () => {
    quantidade++;
    updateQtd()
})

minusBtn.addEventListener('click', () => {
    quantidade--;
    updateQtd()
})

checkoutBtn.addEventListener('click', () => {
    if(quantidade > 0){
        checkout();
    }
})

apagaCart.addEventListener('click', () => {
    cartInfo.style.display = 'none';
    notify.style.display = 'none';

})

btnAvanca.addEventListener('click', () => {
    contaPaginas ++;
    updatePag();
})

btnVolta.addEventListener('click', () => {
    contaPaginas --;
    updatePag();
})

hamburguerBtn.addEventListener('click', () => {
    mobNavigation();
})

mobNavLinks.forEach(e => {
    e.addEventListener('click', () => {
        mobNavigation();
    });
})

telaPreview.addEventListener('click', () => {
    if(window.innerWidth > 1050){
        modalContainer.classList.toggle('modal-on');
        body.style.overflow = 'hidden';
    }
})

function updatePag(){
    if(contaPaginas > 4){
        contaPaginas = 1
    } else if (contaPaginas < 1){
        contaPaginas = 4
    }

    product.innerHTML = `<img src="images/image-product-${contaPaginas}.jpg" />`;
}

function updateQtd(){
    if(quantidade < 0){
        quantidade = 0
    }

    qtd.innerHTML = `<h4>${quantidade}</h4>`;
}

function previews(){

    preview1.addEventListener('click', () => {
        contaPaginas = 1
        updatePag();
    })
    
    preview2.addEventListener('click', () => {
        contaPaginas = 2
        updatePag();
    })
    
    preview3.addEventListener('click', () => {
        contaPaginas = 3
        updatePag();
    })
    
    preview4.addEventListener('click', () => {
        contaPaginas = 4
        updatePag();
    })
}

function checkout(){
    cartInfo.style.display = 'flex';

    checkoutQtd.innerHTML = quantidade;
    checkoutTotal.innerHTML = `$ ${quantidade * 125}`;

    notify.style.display = 'flex';
    notify.innerHTML = quantidade;
}

function mobNavigation(){
    mobNav.classList.toggle('nav-on');
    mobNavContainer.classList.toggle('container-on');

    if(mobNav.classList.contains('nav-on')){
        hamburguerBtn.innerHTML = '<img src="images/icon-close.svg" alt="Close menu">';
        body.style.overflow = 'hidden';

    } else {
        hamburguerBtn.innerHTML = '<img src="images/icon-menu.svg" alt="Menu button" />';
        body.style.overflow = 'auto';
    }
}

function modalBtns(){
    modalThumb1.addEventListener('click', () => {
        contaPaginasModal = 1;
        updatePagModal()
    })

    modalThumb2.addEventListener('click', () => {
        contaPaginasModal = 2;
        updatePagModal()
    })

    modalThumb3.addEventListener('click', () => {
        contaPaginasModal = 3;
        updatePagModal()
    })

    modalThumb4.addEventListener('click', () => {
        contaPaginasModal = 4;
        updatePagModal()
    })

    modalPrev.addEventListener('click', () => {
        contaPaginasModal --
        updatePagModal()
    })

    modalNext.addEventListener('click', () => {
        contaPaginasModal ++
        updatePagModal()
    })

    closeModal.addEventListener('click', () => {
        modalContainer.classList.toggle('modal-on');
        body.style.overflow = 'auto';
    })
}

function updatePagModal(){
    if(contaPaginasModal > 4){
        contaPaginasModal = 1
    } else if (contaPaginasModal < 1){
        contaPaginasModal = 4
    }

    modalPreview.innerHTML = `<img src="images/image-product-${contaPaginasModal}.jpg" />`;
}

modalBtns();
updateQtd();
previews();