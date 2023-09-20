import React from "react";
import "./index.css";
import Login from "./components/Login";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import users from "./reducers/users";
import questions from "./reducers/questions";
import current_user from "./reducers/current_user"
import logger from "./middleware/logger";
import thunk from "redux-thunk";
import { loadingBarReducer } from "react-redux-loading-bar"
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

const reducers = ({
    users,
    questions,
    current_user,
    logger,
    loadingBar: loadingBarReducer
})
const store = configureStore({ reducer: reducers, middleware: [thunk, logger] })

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Login />
        </Provider>
    </BrowserRouter>
    );

// ReactDOM.render(
//     <BrowserRouter>
//         <Provider store={store}>
//             <Login />
//         </Provider>
//     </BrowserRouter>
//     , document.getElementById("root"));