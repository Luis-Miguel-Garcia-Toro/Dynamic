import { http } from "@/common/infrastructure/connection/Http";
import { branchesAdapter } from "./branch-adapter";
import {GET_BRANCH} from '../../../../Global/globalEmar'

export const fetchGetBranches = ({ nit, business, config = {} }) => {
  const params = {
    nit,
    business,
  };

  return http
    .post({
      url: GET_BRANCH,
      body: null,
      config: {
        ...config,
        params,
      },
    })
    .then((response) => branchesAdapter(response));
};
