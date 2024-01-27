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

export const getCurrentUser = async (token) => {
    const { data } = await api(`users/current`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

export const logOut = async (token) => {
    const { data } = await api.post(`users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}
