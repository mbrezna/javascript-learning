export const cart = [];

export function addToCart(productId) {
  //check if the item already figures in the cart
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  })

  //quantity selector
  const quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value)

  //add quantity
  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity
    });
  }
}