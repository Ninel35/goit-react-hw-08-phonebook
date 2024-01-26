import { api } from "./api"

export const SignUpApi = async (body) => {
    console.log('body', body)
    const { data } = await api.post(`users/signup`, body)
    console.log('data', data)
    return data
}

export const LoginApi = async (body) => {
    const { data } = await api.post(`users/login`, body)
     console.log('data', data)
    return data
}
