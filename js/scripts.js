const addToCartBtns = document.querySelectorAll('.add-to-cart');
const cart = document.getElementById('cart');
const selectedProducts = {};

document.querySelector('body').addEventListener('click', function(event) {
  event.preventDefault();

  if (event.target.className.includes('add-to-cart')) {
    const productId = event.target.dataset.pid;
    const productCard = document.getElementById(productId);
    const productTitle = productCard.querySelector('.title').innerText;

    if (productId in selectedProducts) {
      selectedProducts[productId].count += 1;
    } else {
      selectedProducts[productId] = {
        name: productTitle,
        count: 1,
      };
    }
  }
});