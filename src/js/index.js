import '/src/scss/index.scss';
import { pageManipulation } from './page-manipulation';
import { cart } from './cart';

const mainImgContainer = document.getElementById('mainImgContainer');
const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
const thumbnailImages = Array.from(document.querySelectorAll('.thumbnail--container'));
const imgRotateBtnsRight = Array.from(document.querySelectorAll('.icon--container--right'));
const imgRotateBtnsLeft = Array.from(document.querySelectorAll('.icon--container--left'));

const addToCartBtn = document.getElementById('addToCartBtn');
const cartItemContainer = document.getElementById('cartItemContainer');

function initializeListeners() {
	addToCartBtn.addEventListener('click', handleAddToCartBtn);

	mainImgContainer.addEventListener('click', pageManipulation.toggleLightBox);
	lightboxCloseBtn.addEventListener('click', pageManipulation.toggleLightBox);

	thumbnailImages.forEach(thumbnail => thumbnail.addEventListener('click', handlemainImgContainerChange));

	imgRotateBtnsRight.forEach(button => button.addEventListener('click', () => {
		handleImgRotation('right');
	}));
	imgRotateBtnsLeft.forEach(button => button.addEventListener('click', () => {
		handleImgRotation('left');
	}));
}

function handleAddToCartBtn() {
	let cartDetails = cart.getItemDetails();
	let cartItemHTML = cart.createCartItem(cartDetails);
	let cartItem = document.createElement('div');
	cartItem.innerHTML = cartItemHTML;
	cartItemContainer.append(cartItem);
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

initializeListeners();