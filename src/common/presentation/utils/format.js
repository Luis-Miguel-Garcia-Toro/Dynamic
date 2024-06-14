export const formatPrice = (price) => {
  return new Intl.NumberFormat("es-CO", {
    numberingSystem: "latn",
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(price);
};

export const formatDecimalPrice = (price) => {
  return new Intl.NumberFormat("es-CO", {
    numberingSystem: "latn",
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format(price);
};

export const maskPhone = (phone) => {
  return "******" + phone.slice(-4);
};
