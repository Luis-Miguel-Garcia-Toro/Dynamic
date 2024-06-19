const initialState = {
  deliveryDate: new Date(),
  orderResult: undefined,
  isCheckout: false,
};

export const createOrderSlice = (set) => ({
  ...initialState,

  setDeliveryDate: (date) =>
    set({
      deliveryDate: date,
    }),

  setOrderInfo: ({ status, orderId = undefined, total }) => {
    set({
      orderResult: {
        status,
        orderId,
        total,
      },
    });
  },

  toggleIsCheckout: () => {
    set((state) => ({
      isCheckout: !state.isCheckout,
    }));
  },

  resetOrder: () => {
    set({ ...initialState });
  },
});
