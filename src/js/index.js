import '/src/scss/index.scss';

const pageMask = document.getElementById('pageMask');
const mainImg = document.getElementById('mainImg');
const lightboxMainImg = document.getElementById('lightboxMainImg');
const lightbox = document.getElementById('lightbox');
const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
const thumbnailImages = Array.from(document.querySelectorAll('.thumbnail--container'));

mainImg.addEventListener('click', handleLightBox);
lightboxCloseBtn.addEventListener('click', handleLightBox);
thumbnailImages.forEach(thumbnail => thumbnail.addEventListener('click', handleMainImgChange));

function handleLightBox() {
	lightbox.classList.toggle('hidden');
	pageMask.classList.toggle('hidden');
}

function handleMainImgChange() {
	const currThumbnailImages = Array.from(document.querySelectorAll('.image--current'));
	currThumbnailImages.forEach( img => img.classList.toggle('image--current'));
	const imageNumber = this.id.slice(-1);
	
	mainImg.querySelector('.visible').classList.toggle('visible');
	document.getElementById(`image_${imageNumber}`).classList.toggle('visible');

	lightboxMainImg.querySelector('.visible').classList.toggle('visible');
	document.getElementById(`lightboxImage_${imageNumber}`).classList.toggle('visible');

	document.getElementById(`lightboxThumbnail_${imageNumber}`).classList.toggle('image--current');
	document.getElementById(`thumbnail_${imageNumber}`).classList.toggle('image--current');
}