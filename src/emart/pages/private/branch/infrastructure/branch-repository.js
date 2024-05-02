import { http } from "@/common/infrastructure/connection/Http";
import { branchesAdapter } from "./branch-adapter";

const API_EMART_URL = import.meta.env.VITE_API_EMART_URL;

export const fetchGetBranches = ({ nit, business, config = {} }) => {
  const params = {
    nit,
    business,
  };

  return http
    .post({
      url: `${API_EMART_URL}/auth/get_branch_cwpay`,
      body: null,
      config: {
        ...config,
        params,
      },
    })
    .then((response) => branchesAdapter(response));
};
