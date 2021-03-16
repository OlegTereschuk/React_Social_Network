import React from 'react';
import dialogs from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={dialogs.dialog__item}>
            <NavLink to={path} className={dialogs.dialog__item_link} activeClassName={dialogs.item_active}>{props.name}</NavLink>
        </div>
        )
}


export default DialogItem;