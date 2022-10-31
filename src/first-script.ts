interface Item {
  quantity: number;
  itemPrice: number;
}

function calculateTotal(item: Item): number {
  const basePrice = item.quantity * item.itemPrice;
  if (basePrice > 1000) {
    return basePrice * 0.95;
  } else {
    return basePrice * 0.98;
  }
}

const totalPrice = calculateTotal({ itemPrice: 100, quantity: 10 });
console.log(totalPrice);
