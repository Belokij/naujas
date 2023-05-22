let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');

    const nameElement = document.createElement('span');
    nameElement.textContent = item.name;
    itemElement.appendChild(nameElement);

    const spaceElement = document.createElement('span');
    spaceElement.innerHTML = '&nbsp;&nbsp;';

    const priceElement = document.createElement('span');
    priceElement.textContent = `${item.price} €`;
    itemElement.appendChild(spaceElement); 
    itemElement.appendChild(priceElement);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Pašalinti';
    removeButton.addEventListener('click', () => removeFromCart(index));
    itemElement.appendChild(removeButton);

    cartElement.appendChild(itemElement);
    total += item.price;
  });

  const totalElement = document.createElement('div');
  totalElement.innerHTML = `<strong>Iš viso: ${total} €</strong>`;
  cartElement.appendChild(totalElement);
}