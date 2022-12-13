export function formatPrice(price: number) {
  if (price.toString().includes(".")) {
    return price.toString().replace(".", ",");
  } else {
    return price.toFixed(2).replace(".", ",");
  }
}
