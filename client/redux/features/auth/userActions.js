import { server } from "../store";
import axios from  'axios';
// login 
export const  login = (email,password) => async (dispatch)=>{
    try {
        dispatch({
            type: 'loginRequest'
        })
        //hitting api request
        const {data} = await axios.post(`${server}/user/login`,{
            email, password
        },{
            headers:{
                "Content-Type": "application/json"
            }
        })
        dispatch({
            type: 'loginSuccess',
            payload : data?.message
        })
    } catch (error) {
        dispatch({
            type: 'loginFail',
            payload : error.response.data.message
        })
    }
}