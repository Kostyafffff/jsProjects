import axios from 'axios'
import {AUTH_LOGOUT, AUTH_SUCCESS} from "./actionTypes";

export default function auth(email, password, isLogin){
    return async dispatch => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        }

        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBRj1R0UEHzbzdDaOOQIhjqWUvDsusN4Mo';

        if(isLogin){
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBRj1R0UEHzbzdDaOOQIhjqWUvDsusN4Mo';
        }

        try {
            const response = await axios.post(url, authData)
            const data = response.data;

            const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);

            localStorage.setItem('token', data.idToken);
            localStorage.setItem('userId', data.localId);
            localStorage.setItem('expirationDate', expirationDate);

            dispatch(authSuccess(data.idToken))
            dispatch(logout(data.expiresIn))

            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    };
}

export function logoutTime(time) {
    return dispatch =>  {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');

    return {
        type: AUTH_LOGOUT
    }
}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}
