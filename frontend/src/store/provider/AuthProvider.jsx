import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loginStatus } from '../slice/authSlice'
import axios from 'axios'

const AuthProvider = ({children}) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const dispatch = useDispatch();
    useEffect(() => {
        const getverify = async () => {
            try {
                const config = {
                    headers:
                    {
                        authorization: `${token}`
                    }
                }
                const res = await axios.post("http://localhost:5000/api/authverify", {}, config)
                if (res.data.status) {
                    dispatch(loginStatus(res.data.data.data))

                }
                else {
                    localStorage.removeItem("token");
                }

            } catch (error) {
                console.log(error);
            }
        }
        getverify();
    }, [token, dispatch]);


    return (
        <div>
            {children}
        </div>
    )
}

export default AuthProvider
