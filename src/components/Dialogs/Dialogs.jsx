import React from 'react';
import dialogs from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

const Dialogs = (props) => {
    let dialogElements = props.dialogs.map((d) => {
        return (
            <DialogItem name={d.name} id={d.id}/>
        )
    });

    let messageElements = props.messages.map((m) => {
        return (
            <Message message={m.message} id={m.id}/>
        )
    })

    return (
        <div className={dialogs.content}>
            <h3>Dialogs</h3>
            <div className={dialogs.content__container}>
                <div className={dialogs.dialog__items}>
                    { dialogElements }
                </div>
                <div className={dialogs.dialog__messages}>
                    { messageElements }
                </div>
            </div>

        </div>

    );
}

export default Dialogs;