export const getPriceWithDiscount = (price: number, discount: number) =>
  price - (price / 100) * discount;
