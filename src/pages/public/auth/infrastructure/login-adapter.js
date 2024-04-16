export const authAdapter = (data) => {
  return {
    user: data.username || "123456",
  };
};
