import React from 'react';
import {LogoutOutlined, StarTwoTone} from '@ant-design/icons'

const Logout = () => {
    const logoutHandler = (e) => {
        localStorage.removeItem('username')
        localStorage.removeItem('password')
        window.location.reload()
    }
    return (
        <>
            <div style={{position: "absolute", marginLeft: '42%', zIndex: '1',}}>
                <button className='send-button'
                        style={{backgroundColor: "crimson", color: "white"}} onClick={logoutHandler}>
                    <LogoutOutlined/> Logout
                </button>
            </div>
        </>
    );
};

export default Logout;