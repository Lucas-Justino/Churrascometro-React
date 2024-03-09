import axios, { AxiosResponse } from "axios"

const API_URL = "http://localhost:3000/churrasco/"

export const apiGET = async <T>(endpoint: string): Promise<AxiosResponse<T, any>> => {
    return axios.get(`${API_URL}${endpoint}`)
}

export const apiPOST = async <T>(endpoint:string, data:any) => {
    return axios.post(`${API_URL}${endpoint}`, data)
}

export const apiDELETE = async <T>(endpoint:string) => {
    return axios.delete(`${API_URL}${endpoint}`)
}

export const apiPUT = async <T>(endpoint:string, data: any) => {
    return axios.put(`${API_URL}${endpoint}`, data)
}

// export const apiGET = async (endpoint:any) => {
//     try{
//         const response = await axios.get("https://swapi.dev/api/people/1/")
//         return response.data;
//     }
//     catch(error){
//         console.error("Erro ao fazer requisicao GET", error)
//         throw error
//     }
// }
