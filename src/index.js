import React from "react";
import ReactDOM from "react-dom";
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
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';

const reducers = ({
    users,
    questions,
    current_user,
    logger,
    loadingBar: loadingBarReducer
})
const store = configureStore({ reducer: reducers, middleware: [thunk, logger] })

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Login />
        </Provider>
    </BrowserRouter>
    , document.getElementById("root"));