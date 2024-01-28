import { api } from "./api"

export const fetchContacts = async (token) => {
    const {data} = await api(`contacts`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

export const addContact = async (body, token) => {
    const {data} = await api.post(`contacts`, body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

export const deleteContact = async (contactId, token) => {
    const {data} = await api.delete(`contacts/${contactId}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    } )
    return data
}