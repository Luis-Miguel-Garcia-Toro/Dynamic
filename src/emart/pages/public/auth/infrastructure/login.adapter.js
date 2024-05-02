export const phoneListAdapter = (response) => {
  console.log({ response });

  const phoneLists = response.map((item) => {
    return {
      phone: item.phone,
      email: item.email,
      state_password: item.state_password,
    };
  });

  return phoneLists;
};

export const sendCodeAdapter = (response) => {
  return {
    code: response.code[0],
    status: response.status_pass,
  };
};

export const loginAdapter = (response) => {
  //TODO: Aplanar data
  return response;
};

export const createPasswordAdapter = (response) => {
  return {
    codeResponse: response,
  };
};
