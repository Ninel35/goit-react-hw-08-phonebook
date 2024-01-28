import { createAsyncThunk } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "api/fetchContacts"

export const getContactsThunk = createAsyncThunk('contacts/getContacts', async (_, { rejectWithValue, getState }) => {
   
      try {
         return await fetchContacts(getState().auth.token) 
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const addContactThunk = createAsyncThunk('contacts/addContact', async (body, { rejectWithValue, getState }) => {

    try {
         return await addContact(body, getState().auth.token) 
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (id, { rejectWithValue, getState }) => {
   
        try {
         return await deleteContact(id, getState().auth.token) 
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
  
})
