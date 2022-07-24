const lightboxmainImgContainer = document.getElementById('lightboxmainImgContainer');
const mainImgContainer = document.getElementById('mainImgContainer');
const itemCount = document.getElementById('itemCount');
const cartSection = document.getElementById('cart');
const cartItemContainer = document.getElementById('cartItemContainer');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartTextEmpty = document.getElementById('cartTextEmpty');

export const pageManipulation = {
	changeImage: (imageId) => {
		pageManipulation.changeMainImg(imageId);
		pageManipulation.changeCurrentThumbnail(imageId);
	},

	changeCurrentThumbnail: (imageId) => {
		const currThumbnailImages = Array.from(document.querySelectorAll('.image--current'));
		currThumbnailImages.forEach( img => img.classList.toggle('image--current'));

		document.getElementById(`lightboxThumbnail_${imageId}`).classList.toggle('image--current');
		document.getElementById(`thumbnail_${imageId}`).classList.toggle('image--current');
	},

	changeMainImg: (imageId) => {
		mainImgContainer.querySelector('.visible').classList.toggle('visible');
		document.getElementById(`image_${imageId}`).classList.toggle('visible');

		lightboxmainImgContainer.querySelector('.visible').classList.toggle('visible');
		document.getElementById(`lightboxImage_${imageId}`).classList.toggle('visible');
	},

	toggleHidden: (element) => {
		element.classList.toggle('hidden');
	},

	editCount: (amount) => {
		let currAmount = Number(itemCount.textContent);
		let newAmount = currAmount + amount;
		if (newAmount >= 0) itemCount.textContent = newAmount;
	},

	showCart: () => {
		cartSection.classList.remove('hidden');
	},

	updateCart() {
		if (cartItemContainer.hasChildNodes()) {
			checkoutBtn.classList.remove('hidden');
			cartTextEmpty.classList.add('hidden');
		} else {
			checkoutBtn.classList.add('hidden');
			cartTextEmpty.classList.remove('hidden');
		}
	}
};