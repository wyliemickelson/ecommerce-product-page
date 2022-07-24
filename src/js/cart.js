export const cart = {
	createCartItem: (itemDetails) => {
		return `<div class="cart_item basic-flex">
  		<img class="item_thumbnail" src="${itemDetails.thumbnailSrc}">
 		 <div class="item_text basic-flex">
   		 <p class="item_name">${itemDetails.itemName}</p>
   		 <div class="basic-flex">
      		<p>${USD.format(itemDetails.itemPrice)} x ${itemDetails.itemCount}</p>
      		<p class="black-bold">${USD.format(itemDetails.itemPrice * itemDetails.itemCount)}</p>
    		</div>
  		</div>
  		<button class="cartItemDelBtn"><img class="icon" src="assets/icon-delete.svg"></button>
		</div>`;
	},

	getItemDetails: () => {
		let itemPrice = document.getElementById('currentPrice').textContent;
		itemPrice = Number(itemPrice.replace('$', ''));
		return {
			thumbnailSrc: document.getElementById('firstThumbnail').src,
			itemName: document.getElementById('itemName').textContent,
			itemPrice,
			itemCount: Number(document.getElementById('itemCount').textContent)
		};
	}};

let USD = Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
});