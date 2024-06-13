import { http } from "../../../../../../common/infrastructure/connection/Http";
import { GET_CONFIG_PAGE } from "../../../../infrastructure/globals/globals";

export const fetchGetConfigPage = async () => {
  try {
    const response = await http.get({ url: GET_CONFIG_PAGE });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
