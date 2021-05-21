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
    const productPrice = productCard.querySelector('.price').innerText.substring(1);

    if (productId in selectedProducts) {
      selectedProducts[productId].count += 1;
      selectedProducts[productId].price = selectedProducts[productId].count * Number(productPrice);
    } else {
      selectedProducts[productId] = {
        name: productTitle,
        count: 1,
        price: Number(productPrice)
      };
    }
  }

  renderCart();
});

function renderCart() {
  let output = '';
  let total = 0;

  for (const product in selectedProducts) {
    output += `
    <tr>
      <td>${selectedProducts[product].name}</td>
      <td>${selectedProducts[product].count} <a href="#" class="button is-small reduce-product"><span class="icon is-small"><i class="fas fa-minus" data-reduce="${product}"></i></span></a></td>
      <td>$${selectedProducts[product].price}</td>
      <td><a href="#" class="button is-danger is-small remove-product" data-remove="${product}"><span class="icon is-small"><i class="fas fa-trash"></i></span></a></td>
    </tr>
    `;

    total += selectedProducts[product].price;
  }

  totalPrice.innerHTML = `$${total}`;
  productsTableBody.innerHTML = output;
}