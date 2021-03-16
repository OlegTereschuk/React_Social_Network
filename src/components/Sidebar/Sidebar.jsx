import React from 'react';
import sidebar from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className={sidebar.sidebar}>
            Sidebar
            <ul>
                <li className={sidebar.item}>
                    <NavLink to="/profile" className={sidebar.link} activeClassName={sidebar.activeLink}>Profile</NavLink>
                </li>
                <li className={sidebar.item}>
                    <NavLink to="/dialogs"className={sidebar.link} activeClassName={sidebar.activeLink}>Messages</NavLink>
                </li>
                <li className={sidebar.item}>
                    <NavLink to="/news" className={sidebar.link} activeClassName={sidebar.activeLink}>News</NavLink>
                </li>
                <li className={sidebar.item}>
                    <NavLink to="/music" className={sidebar.link} activeClassName={sidebar.activeLink}>Music</NavLink>
                </li>
                <li className={sidebar.item}>
                    <NavLink to="/settings" className={sidebar.link} activeClassName={sidebar.activeLink}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;