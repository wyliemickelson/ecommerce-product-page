import '/src/scss/index.scss';
import { pageManipulation } from './page-manipulation';
import { cart } from './cart';

const mainImgContainer = document.getElementById('mainImgContainer');
const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
const thumbnailImages = Array.from(document.querySelectorAll('.thumbnail--container'));
const imgRotateBtnsRight = Array.from(document.querySelectorAll('.icon--container--right'));
const imgRotateBtnsLeft = Array.from(document.querySelectorAll('.icon--container--left'));

const showCartBtn = document.getElementById('showCartBtn');
const addToCartBtn = document.getElementById('addToCartBtn');
const cartSection = document.getElementById('cart');
const cartItemContainer = document.getElementById('cartItemContainer');
const itemCount = document.getElementById('itemCount');

const lightbox = document.getElementById('lightbox');
const pageMask = document.getElementById('pageMask');

const countIncrementBtn = document.getElementById('countIncrement');
const countDecrementBtn = document.getElementById('countDecrement');

function initializeListeners() {
	showCartBtn.addEventListener('click', () => pageManipulation.toggleHidden(cartSection));
	addToCartBtn.addEventListener('click', handleAddToCartBtn);

	mainImgContainer.addEventListener('click', handleLightBox);
	lightboxCloseBtn.addEventListener('click', handleLightBox);

	thumbnailImages.forEach(thumbnail => thumbnail.addEventListener('click', handlemainImgContainerChange));

	imgRotateBtnsRight.forEach(button => button.addEventListener('click', () => {
		handleImgRotation('right');
	}));
	imgRotateBtnsLeft.forEach(button => button.addEventListener('click', () => {
		handleImgRotation('left');
	}));

	countIncrementBtn.addEventListener('click', () => handleCountIncrement(1));
	countDecrementBtn.addEventListener('click', () => handleCountIncrement(-1));
}

function handleLightBox() {
	pageManipulation.toggleHidden(pageMask);
	pageManipulation.toggleHidden(lightbox);
}

function handleAddToCartBtn() {
	if (Number(itemCount.textContent) === 0) return;
	let itemDetails = cart.getItemDetails();
	let cartItemHTML = cart.createCartItem(itemDetails);
	let cartItem = document.createElement('div');
	cartItem.innerHTML = cartItemHTML;

	cartItem.querySelector('.cartItemDelBtn').addEventListener('click', handleCartItemDeletion);

	cartItemContainer.append(cartItem);
	pageManipulation.updateCart();
	pageManipulation.showCart();
}

function handleImgRotation(direction) {
	const currImgId = Number(mainImgContainer.querySelector('.visible').id.slice(-1));
	let newImgId = (direction === 'right') ? currImgId + 1 : currImgId - 1;
	if (newImgId === 0) newImgId = 4;
	if (newImgId === 5) newImgId = 1;
	pageManipulation.changeImage(newImgId);
}

function handlemainImgContainerChange() {
	const newImgId = this.id.slice(-1);
	pageManipulation.changeImage(newImgId);
}

function handleCountIncrement(amount) {
	pageManipulation.editCount(amount);
}

function handleCartItemDeletion() {
	this.closest('.cart_item').parentElement.remove();
	pageManipulation.updateCart();
}

initializeListeners();