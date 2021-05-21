const addToCartBtns = document.querySelectorAll('.add-to-cart');
const cart = document.getElementById('cart');
const selectedProducts = {};
const productsTableBody = document.getElementById('products-table-body');
const totalPrice = document.getElementById('total-price');

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

  renderCart();
});

function renderCart() {
  let output = '';
  for (const product in selectedProducts) {
    output += `
    <tr>
      <td>${selectedProducts[product].name}</td>
      <td>${selectedProducts[product].count} <a href="#" class="button is-small reduce-product"><span class="icon is-small"><i class="fas fa-minus" data-reduce="${product}"></i></span></a></td>
      <td>$25</td>
      <td><a href="#" class="button is-danger is-small remove-product" data-remove="${product}"><span class="icon is-small"><i class="fas fa-trash"></i></span></a></td>
    </tr>
    `;
  }

  productsTableBody.innerHTML = output;
}