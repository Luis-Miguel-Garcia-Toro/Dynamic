
export const createCartSlice = (set, get) => ({
  cart: [],

  getTotalItems: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + item.quantity, 0);
  },

  getSummaryInformation: () => {
    const { cart } = get();

    const total = cart.reduce(
      (total, product) => product.quantity * product.price + total,
      0
    );

    const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

    return {
      total,
      itemsInCart,
    };
  },

  addProductToCart: (product) => {
    console.log(product);
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
    const updatedCartProducts = cart.filter((item) => item.code !== product.code);

    set({ cart: updatedCartProducts });
  },

  clearCart: () => {
    set({ cart: [] });
  },
});
