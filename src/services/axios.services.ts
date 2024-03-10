import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:3000/";

export const apiGET = async <T>(
  endpoint: string
): Promise<AxiosResponse<T, IData>> => {
  return axios.get(`${API_URL}${endpoint}`);
};

export const apiPOST = async (endpoint: string, data: IData) => {
  return axios.post(`${API_URL}${endpoint}`, data);
};

export const apiDELETE = async (endpoint: string) => {
  console.log(endpoint);
  return axios.delete(`${API_URL}${endpoint}`);
};

export const apiPUT = async (endpoint: string, data: IData) => {
  console.log(`${API_URL}${endpoint}`, data);
  return axios.put(`${API_URL}${endpoint}`, data);
};
