import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "./auth/userReducer"

export default configureStore({
    reducer:{
        user: userReducer
    }
})

//host 
export const server = 'http://192.168.1.64:5000/api/v1'