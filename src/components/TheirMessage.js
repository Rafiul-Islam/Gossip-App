import React from 'react';

const TheirMessage = ({message, lastMessage}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username
    return (
        <>
            <div className='message-row'>
                {
                    isFirstMessageByUser && (
                        <div
                            className='message-avatar'
                            style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                        />
                    )
                }
                {
                    message?.attachments?.length > 0 ? (
                        <img
                            className='message-image'
                            src={message.attachments[0].file}
                            alt="message-atc"
                            style={{marginLeft: isFirstMessageByUser ? '4px' : '48px'}}/>
                    ) : (
                        <div className='message'
                             style={{
                                 float: "left",
                                 marginRight: '18px',
                                 color: "black",
                                 backgroundColor: '#CABCDC',
                                 marginLeft: isFirstMessageByUser ? '4px' : '48px'
                             }}>
                            {message.text}
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default TheirMessage;