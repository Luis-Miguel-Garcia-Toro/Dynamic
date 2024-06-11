import axios from "axios";
import { GET_CONFIG_PAGE } from "../../../../infrastructure/globals/globals";

export const fetchGetConfigPage = async () => {
  try {
    const response = await axios.get(GET_CONFIG_PAGE);
    return response.data;
  } catch (error) {
    return null;
  }
};
