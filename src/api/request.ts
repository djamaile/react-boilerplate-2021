import axios, { Method, AxiosResponse } from "axios";

const api = axios.create({
  // baseURL: process.env.REACT_APP_HOST_BACKEND,
  baseURL: "http://localhost:8000",
});

// Define a default query function that will receive the query key
export const defaultQueryFn = async ({ queryKey }: any): Promise<any> => {
  const { data } = await api.get(`${queryKey[0]}`);
  return data;
};

const request = <T>(
  method: Method,
  url: string,
  params: any
): Promise<AxiosResponse<T>> => {
  return api.request<T>({
    method,
    url,
    params,
  });
};

export default request;
