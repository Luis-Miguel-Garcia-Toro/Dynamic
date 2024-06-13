// url base for configuration page
const URL_BASE_API = import.meta.env.VITE_API_EMART_URL;
const ENV = import.meta.env.VITE_ENVIRONMENT;
const BUSINESS_UNIT = import.meta.env.VITE_BUSINESS_UNIT;


// url base for ecommerce
export const URL_BASE_ECOMMERCE = import.meta.env.VITE_URL_API_PRD

// services for configuration page
export const GET_CONFIG_PAGE = `${URL_BASE_API}/business/get_config_business?business=${BUSINESS_UNIT}&environment=${ENV}`;

// services for use in ecommerce
export const GET_CATEGORY_B2B = `${URL_BASE_ECOMMERCE}category_b2b/get_category_b2b?business_unit=${BUSINESS_UNIT}&environment=${ENV}`
export const GET_PRODUCT_B2B = `${URL_BASE_ECOMMERCE}products_b2b/get_list_products_b2b?`
