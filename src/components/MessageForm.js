import React, {useState} from 'react';
import {isTyping, sendMessage} from "react-chat-engine";
import {PictureOutlined, SendOutlined} from "@ant-design/icons";

const MessageForm = (props) => {
    const {chatID, creds} = props
    const [value, setValue] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        const text = value.trim()
        if (text.length > 0) {
            sendMessage(creds, chatID, {text})
            setValue('')
        }
    }
    const changeHandler = (e) => {
        setValue(e.target.value)
        isTyping(props, chatID)
    }
    const uploadHandler = (e) => {
        sendMessage(creds, chatID, {files: e.target.files, text: ''})
    }
    return (
        <>
            <div style={{display: "flex", alignItems: "center", marginBottom: '10px'}}>
                <form className='message-form' action="" onSubmit={submitHandler} style={{flex: '2'}}>
                    <input
                        className='message-input'
                        placeholder='Send a message'
                        onChange={changeHandler}
                        onSubmit={submitHandler}
                        value={value}
                        type="text"
                    />
                </form>
                <label htmlFor="upload-button">
                <span className='image-button'>
                    <PictureOutlined className='picture-icon'/>
                </span>
                </label>
                <input type="file" multiple={false} id='upload-button' style={{display: "none"}}
                       onChange={uploadHandler}/>
                {/*<button type='submit' className='send-button'>*/}
                {/*    <SendOutlined className='send-icon'/>*/}
                {/*</button>*/}
            </div>
        </>
    );
};

export default MessageForm;