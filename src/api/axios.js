import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const login = async ({ email, password }) => {
  const response = await axios({
    method: "post",
    url: "/tokens",
    data: {
      email,
      password,
    },
  });
  return response.data;
};

const register = async ({
  firstnameReg,
  lastnameReg,
  emailReg,
  passwordReg,
}) => {
  const response = await axios({
    method: "post",
    url: "/users",
    data: {
      firstnameReg,
      lastnameReg,
      emailReg,
      passwordReg,
    },
  });
  return response.data;
};

const getProducts = async () => {
  const response = await axios({
    method: "get",
    url: "/products",
  });

  return response.data;
};

const getOneProduct = async (slug) => {
  const response = await axios({
    method: "get",
    url: `/products/${slug}`,
  });
  return response.data;
};

const getCategories = async () => {
  const response = await axios({
    method: "get",
    url: "/categories",
  });
  return response.data;
};

const api = { getProducts, getOneProduct, login, register, getCategories };
export default api;
