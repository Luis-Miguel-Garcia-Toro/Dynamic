const URL_BASE_API = import.meta.env.VITE_API_EMART_URL;
const ENV = import.meta.env.VITE_ENVIRONMENT;
const BUSINESS_UNIT = import.meta.env.VITE_BUSINESS_UNIT;

export const GET_CONFIG_PAGE = `${URL_BASE_API}/business/get_config_business?business=${BUSINESS_UNIT}&environment=${ENV}`;
