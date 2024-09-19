const URL_BASE_API = import.meta.env.VITE_API_EMART_URL;

export const GET_BRANCH = `${URL_BASE_API}/auth/get_branch_cwpay`
export const GET_LIST_PHONE = `${URL_BASE_API}/auth/get_list_phone`
export const VALIDATE_CODE_EMART = `${URL_BASE_API}/auth/send_validation_code`
export const LOGIN_CW_PAY =  `${URL_BASE_API}/auth/login_cwpay`
export const CREATE_PASS = `${URL_BASE_API}/auth/create_password`

export const GET_WALLET = `${URL_BASE_API}/business/get_wallet`
export const SUBMITWOMPY = 'https://api1.cwmovilidad.com/wompi_produccion/api/pay_link_sql/create_pay_link_wompi'