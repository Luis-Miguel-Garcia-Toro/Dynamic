const initialState = {
  deliveryDate: new Date(),
  orderResult: undefined,
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

  resetOrder: () => {
    set({ ...initialState });
  },
});
