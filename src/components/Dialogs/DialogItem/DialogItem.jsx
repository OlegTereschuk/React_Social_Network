import React from 'react';
import dialogs from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={dialogs.dialog__item}>
            <NavLink to={path} className={dialogs.dialog__item_link} activeClassName={dialogs.item_active}>{props.name}</NavLink>
        </div>
        )
}

const Message = (props) => {
    return (
        <div className={dialogs.dialog__message_item}>{props.message}</div>
    )
}

const Dialogs = () => {
    let dialogsData = [
        { "id": 1, "name": "Вася"},
        { "id": 2, "name": "Гандрій"},
        { "id": 3, "name": "Гаврило"},
        { "id": 4, "name": "Прокіп"},
        { "id": 5, "name": "Степан"},
        { "id": 6, "name": "Ганя"},
        { "id": 7, "name": "Люська"},
        { "id": 8, "name": "Саня"},
    ];

    let dialogElements = dialogsData.map((d) => {
        return (
            <DialogItem name={d.name} id={d.id}/>
        )
    })

    let messagesData = [
        { "id": 1, "message": "Привітулі!"},
        { "id": 2, "message": "Як ти тама поживаєш?"},
        { "id": 3, "message": "Кицька ше не за котами?"},
        { "id": 4, "message": "Коли ти вже вспокоїш?"}
    ];

    let messageElements = messagesData.map((m) => {
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