export const formatPrice = (price) => {
  return new Intl.NumberFormat("es-CO", {
    numberingSystem: "latn",
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(price);
};
