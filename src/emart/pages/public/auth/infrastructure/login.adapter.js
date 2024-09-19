export const phoneListAdapter = (response) => {
  const phoneLists = response.map((item) => {
    return {
      phone: item.phone,
      email: item.email,
      state_password: item.state_password,
      name : item.name ? item.name : '',
      razon_social : item.razon_social ? item.razon_social : '',
      code : item.code ? item.code : '',
      nit : item.nit ? item.nit : ''
    };
  });

  return phoneLists;
};

export const sendCodeAdapter = (response) => {
  return {
    code: response.code[0],
    status: response.status_pass,
    business: response.data || [],
  };
};

export const loginAdapter = (response) => {
  return response;
};

export const createPasswordAdapter = (response) => {
  return {
    codeResponse: response,
  };
};
