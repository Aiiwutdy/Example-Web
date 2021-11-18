import axios from "axios"

export const login = async (data) => {
    return{data: {status: true, data: {token: 'asdasd'}, message:'Username or password ircorrect'}}
}

export const register = (data) => axios.post('https://www.fdfdsfdsfsdf.,com/api/register', data)
