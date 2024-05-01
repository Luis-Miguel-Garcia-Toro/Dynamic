import axios from "axios";

const get = async ({ url, config }) =>
  axios
    .get(url, config)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

const post = async ({ url, body, config }) =>
  axios
    .post(url, body, config)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

const put = async ({ url, body, config }) =>
  axios
    .put(url, body, config)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

const patch = async ({ url, body, config }) =>
  axios
    .patch(url, body, config)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

const _delete = async ({ url, config }) =>
  axios
    .delete(url, config)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const http = {
  get,
  post,
  put,
  patch,
  _delete,
};
