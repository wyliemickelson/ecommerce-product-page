const lightboxmainImgContainer = document.getElementById('lightboxmainImgContainer');
const mainImgContainer = document.getElementById('mainImgContainer');

const lightbox = document.getElementById('lightbox');
const pageMask = document.getElementById('pageMask');

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

	toggleLightBox: () => {
		lightbox.classList.toggle('hidden');
		pageMask.classList.toggle('hidden');
	}
};