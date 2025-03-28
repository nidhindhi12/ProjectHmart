import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react';
import { closetoast } from '../slice/toastSlice';


const ToastProvider = ({ children }) => {
    const dispatch = useDispatch();
    const toastState = useSelector((state) => state.toast);
    // console.log(toastState);

    useEffect(() => {
        if (toastState.message && toastState.type) {
            toast[toastState.type](toastState.message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                // style: { // Custom styling
                //     backgroundColor: "#fed32e",
                //     color: "#fff",
                //     fontSize: "16px",
                //     border: "2px solid #ffcc00",
                //     borderRadius: "10px",
                // },
                onClose: () => {
                    dispatch(closetoast())
                }


            })
        }

    }, [toastState, dispatch])

    return (
        <>
            {children}
            <ToastContainer />
        </>
    )

}

export default ToastProvider;