import axios from "axios";

export const useAxiosInstance = () => {
  const { API_URL } = useRuntimeConfig();

  return axios.create({
    baseURL: API_URL,
    withCredentials: true,
  });
};

export default useAxiosInstance;
