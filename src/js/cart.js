let USD = Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
});

export function createCartItem(cartDetails) {
	let thumbnailSrc = cartDetails[0];
	let itemName = cartDetails[1];
	let itemPrice = cartDetails[2];
	let itemCount = cartDetails[3];
	return `<div class="cart_item basic-flex">
  <img class="item_thumbnail" src="${thumbnailSrc}">
  <div class="item_text basic-flex">
    <p class="item_name">${itemName}</p>
    <div class="basic-flex">
      <p>${USD.format(itemPrice)} x ${itemCount}</p>
      <p class="black-bold">${USD.format(itemPrice * itemCount)}</p>
    </div>
  </div>
  <button><img class="icon" src="assets/icon-delete.svg"></button>
</div>`;
}

export function getItemDetails() {
	let firstThumbnailSrc = document.getElementById('firstThumbnail').src;
	let itemName = document.getElementById('itemName').textContent;
	let itemPrice = document.getElementById('currentPrice').textContent;
	itemPrice = Number(itemPrice.replace('$', ''));
	let itemCount = Number(document.getElementById('itemCount').textContent);
	return [firstThumbnailSrc, itemName, itemPrice, itemCount];
}