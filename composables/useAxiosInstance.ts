import axios from "axios";

export const useAxiosInstance = () => {
  const config = useRuntimeConfig();

  return axios.create({
    baseURL: config.public.API_URL,
    withCredentials: true,
  });
};

export default useAxiosInstance;
