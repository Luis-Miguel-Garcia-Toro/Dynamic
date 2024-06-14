export const createCartSlice = (set, get) => ({
  cart: [],

  getTotalItems: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + item.quantity, 0);
  },

  getSummaryInformation: () => {
    const { cart } = get();

    let Iva = 0;
    let impAzucarados = 0;
    let subtotal = 0;
    let ultraProcesados = 0;
    cart.map((item) => {
      Iva = Iva + (item.quantity * item.price * item.tax1) / 100;
      impAzucarados = impAzucarados + parseFloat(item.tax3);
      subtotal = subtotal + item.quantity * item.price;
      ultraProcesados =
        ultraProcesados + (item.quantity * item.price * item.tax2) / 100;
    });

    const total = subtotal + Iva + parseFloat(impAzucarados) + ultraProcesados;

    const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0);
    return {
      Iva,
      subtotal,
      total,
      itemsInCart,
      impAzucarados,
      ultraProcesados,
    };
  },

  addProductToCart: (product) => {
    const { cart } = get();
    const productExist = cart.some((item) => item.code === product.code);

    if (!productExist) {
      return set({ cart: [...cart, product] });
    }

    const updatedCartProducts = cart.map((item) => {
      if (item.code === product.code) {
        return {
          ...item,
          quantity: item.quantity + product.quantity,
        };
      }

      return item;
    });

    return set({ cart: updatedCartProducts });
  },

  updateProductQuantity: (product, quantity) => {
    const { cart, removeProduct } = get();

    if (quantity === 0) {
      removeProduct(product);
      return;
    }

    const updatedCartProducts = cart.map((item) => {
      if (item.code === product.code) {
        return { ...item, quantity: quantity };
      }
      return item;
    });

    set({ cart: updatedCartProducts });
  },

  removeProduct: (product) => {
    const { cart } = get();
    const updatedCartProducts = cart.filter(
      (item) => item.code !== product.code
    );

    set({ cart: updatedCartProducts });
  },

  clearCart: () => {
    set({ cart: [] });
  },
});
