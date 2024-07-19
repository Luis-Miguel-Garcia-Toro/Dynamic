// url base for configuration page

const URL_BASE_API = import.meta.env.VITE_API_EMART_URL;
export const ENV = import.meta.env.VITE_ENVIRONMENT;
export const BUSINESS_UNIT = import.meta.env.VITE_BUSINESS_UNIT;

// url base for ecommerce
export const URL_BASE_ECOMMERCE = import.meta.env.VITE_URL_API_DEV;
export const ENV_ECOMMERCE = import.meta.env.VITE_ENVIRONMENT_ECOMMERCE;
// services for configuration page
export const GET_CONFIG_PAGE = `${URL_BASE_API}/business/get_config_business?business=${BUSINESS_UNIT}&environment=${ENV}`;

// services for use in ecommerce
export const GET_CATEGORY_B2B = `${URL_BASE_ECOMMERCE}category_b2b/get_category_b2b?business_unit=${BUSINESS_UNIT}&environment=${ENV_ECOMMERCE}`;
export const GET_PRODUCT_B2B = `${URL_BASE_ECOMMERCE}products_b2b/get_list_products_b2b?`;
export const LOGIN_USER = `${URL_BASE_ECOMMERCE}auth_b2b/login_b2b_web`;
export const LOGIN_BOOT = `${URL_BASE_ECOMMERCE}auth_b2b/login_b2b_web_bot`;
export const VALIDATE_CODE = `${URL_BASE_ECOMMERCE}auth_b2b/validate_code_login_b2b_web?`;
export const NEW_ORDER = `${URL_BASE_ECOMMERCE}order/new_order`;
export const GET_ORDER_HISTORY = `${URL_BASE_ECOMMERCE}order_b2b/get_history_order`;
export const GET_BANNER = `${URL_BASE_ECOMMERCE}products_b2b/get_list_banners?&branch=-1&business_unit=1000&environment=prd`;
export const RECOVER_PASSWORD = `${URL_BASE_ECOMMERCE}auth_b2b/recover_password`;
export const UPDATE_PASSWORD = `${URL_BASE_ECOMMERCE}auth_b2b/update_password_b2b`;
export const GET_SUGGESTED = `${URL_BASE_ECOMMERCE}order/suggested_order`

