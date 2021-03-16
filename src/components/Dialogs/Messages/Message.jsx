import React from 'react';
import dialogs from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={dialogs.dialog__message_item}>{props.message}</div>
    )
}


export default Message;