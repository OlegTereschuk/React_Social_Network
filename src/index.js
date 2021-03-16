import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state from './redux/state.js'

let postData = [
    {"id": 1, "message": "Hi, how are you?", "likesCount": 2},
    {"id": 1, "message": "Hi, how are you?", "likesCount": 2},
    {"id": 2, "message": "It's my first post", "likesCount": 5},
    {"id": 2, "message": "It's my first post", "likesCount": 5},
    {"id": 3, "message": "It's my first post", "likesCount": 25}
];

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

let messagesData = [
    { "id": 1, "message": "Привітулі!"},
    { "id": 2, "message": "Як ти тама поживаєш?"},
    { "id": 3, "message": "Кицька ше не за котами?"},
    { "id": 4, "message": "Коли ти вже вспокоїш?"}
];

ReactDOM.render(


  <React.StrictMode>

    <App postData={postData} dialogsData={dialogsData} messageData={messagesData}/>


  </React.StrictMode>,

  document.getElementById('root')

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
