import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./components/Login";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import users from "./reducers/users";
import questions from "./reducers/questions";
import shared from "./reducers/shared"
import logger from "./middleware/logger";
import thunk from "redux-thunk";
import { loadingBarReducer } from "react-redux-loading-bar"

const reducers = ({
    users,
    questions,
    shared,
    logger,
    loadingBar: loadingBarReducer
})
const store = configureStore({ reducer: reducers, middleware: [thunk, logger] })

ReactDOM.render(
    <Provider store={store}>
        <Login />
    </Provider>
    , document.getElementById("root"));