import '/src/scss/index.scss';

const pageMask = document.getElementById('pageMask');
const mainImgContainer = document.getElementById('mainImgContainer');
const lightboxmainImgContainer = document.getElementById('lightboxmainImgContainer');
const lightbox = document.getElementById('lightbox');
const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
const thumbnailImages = Array.from(document.querySelectorAll('.thumbnail--container'));
const imgRotateBtnsRight = Array.from(document.querySelectorAll('.icon--container--right'));
const imgRotateBtnsLeft = Array.from(document.querySelectorAll('.icon--container--left'));

mainImgContainer.addEventListener('click', toggleLightBox);
lightboxCloseBtn.addEventListener('click', toggleLightBox);

thumbnailImages.forEach(thumbnail => thumbnail.addEventListener('click', handlemainImgContainerChange));

imgRotateBtnsRight.forEach(button => button.addEventListener('click', () => {
	handleImgRotation('right');
}));
imgRotateBtnsLeft.forEach(button => button.addEventListener('click', () => {
	handleImgRotation('left');
}));

function toggleLightBox() {
	lightbox.classList.toggle('hidden');
	pageMask.classList.toggle('hidden');
}

function handleImgRotation(direction) {
	const currImgId = Number(mainImgContainer.querySelector('.visible').id.slice(-1));
	let newImgId = (direction === 'right') ? currImgId + 1 : currImgId - 1;
	if (newImgId === 0) newImgId = 4;
	if (newImgId === 5) newImgId = 1;
	changeImage(newImgId);
}

function handlemainImgContainerChange() {
	const newImgId = this.id.slice(-1);
	changeImage(newImgId);
}

function changeImage(imageId) {
	changeMainImg(imageId);
	changeCurrentThumbnail(imageId);
}

function changeCurrentThumbnail(imageId) {
	const currThumbnailImages = Array.from(document.querySelectorAll('.image--current'));
	currThumbnailImages.forEach( img => img.classList.toggle('image--current'));

	document.getElementById(`lightboxThumbnail_${imageId}`).classList.toggle('image--current');
	document.getElementById(`thumbnail_${imageId}`).classList.toggle('image--current');
}

function changeMainImg(imageId) {
	mainImgContainer.querySelector('.visible').classList.toggle('visible');
	document.getElementById(`image_${imageId}`).classList.toggle('visible');

	lightboxmainImgContainer.querySelector('.visible').classList.toggle('visible');
	document.getElementById(`lightboxImage_${imageId}`).classList.toggle('visible');
}