import React from 'react'
import Profile from "../profile/Profile"
import Chat from "../chatbox/Chat"

const Admin = () => {
    return <>
        <div className='container-fluid px-5'>
            <div className='row'>
                <div className='col-lg-3 pl-4'>
                    <Profile />
                </div>
                <div className='col-lg-9'>
                    <Chat />
                </div>
            </div>
        </div>
    </>
}

export default Admin