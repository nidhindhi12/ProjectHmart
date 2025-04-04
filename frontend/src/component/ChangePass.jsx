import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleChangePass } from '../store/slice/modalSlice';
import { showtoast } from '../store/slice/toastSlice'
import axios from 'axios'

const ChangePass = () => {

    const changePass = useSelector((state) => state.modalShow.changePass);
    const userInfo = useSelector((state) => state.auth.user);
    const [passInfo, setPassInfo] = useState({
        id: userInfo._id,

    });
    const dispatch = useDispatch();


    const handlefetchPasswordInfo = (e) => {
        const { name, value } = e.target;
        setPassInfo({ ...passInfo, [name]: value });

    }

    const handleUpdatePassword = async (e) => {
        e.preventDefault();
        if (passInfo.newpassword !== passInfo.confirmpassword) {
            dispatch(showtoast({ message: "New Password and Confirm Password do not match", type: "error" }));
            return;
        }
        try {
            const response = await axios.put(`http://localhost:5000/api/updatepassword/${passInfo.id}`, passInfo);
            if (response.data.status)
                dispatch(showtoast({ message: response.data.data.message, type: "success" }))

        } catch (error) {
            dispatch(showtoast({ message: error.response?.data?.data?.message, type: "error" }))
        }


    }
    const isdisabled = (!passInfo.oldpassword || !passInfo.newpassword || !passInfo.confirmpassword);

    return (
        <>


            <Modal
                size="sm"
                aria-labelledby="example-modal-sizes-title-sm"
                show={changePass} onHide={() => dispatch(toggleChangePass())}

            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm" className=' text-uppercase fs-5' style={{ 'color': 'var(--highlight-color)' }}>
                        Change Password
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form_box">
                        <input type="text" placeholder='Old Password' className=' w-100 rounded-2 border border-light-subtle' name="oldpassword" onChange={handlefetchPasswordInfo} />
                        <input type="text" placeholder='New Password' className=' w-100 rounded-2 border border-light-subtle my-3' name="newpassword" onChange={handlefetchPasswordInfo} />
                        <input type="password" placeholder="Confirm Password" className=' w-100 rounded-2 border border-light-subtle' name="confirmpassword" onChange={handlefetchPasswordInfo} />
                        <div className=' text-center'>
                            <button className='btn btn-secondary' disabled={isdisabled} onClick={handleUpdatePassword}>Submit</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ChangePass
