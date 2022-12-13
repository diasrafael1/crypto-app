export function formatPrice(price: number) {
  if (price.toString().includes(".")) {
    return price.toFixed(2).toString().replace(".", ",");
  } else {
    return price.toFixed(2).replace(".", ",");
  }
}
