import { render } from '@testing-library/react';
import Header from './Header'
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import users from '../reducers/users';
import questions from "../reducers/questions";
import current_user from "../reducers/current_user"
import logger from "../middleware/logger";
import thunk from "redux-thunk";
import { loadingBarReducer } from "react-redux-loading-bar"
import { MemoryRouter } from 'react-router-dom';


const reducers = ({
    users,
    questions,
    current_user,
    logger,
    loadingBar: loadingBarReducer
})
const store = configureStore({ reducer: reducers, middleware: [thunk, logger] })

describe('Header', () => {
    it('contains 4 buttons', () => {
        localStorage.setItem('user', "sarahedo")
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </MemoryRouter>
            
        );
        expect(component.queryAllByRole('button').length).toBe(4)
    })

    it('shows the logged in user name in the header', () => {
        localStorage.setItem('user', "sarahedo")
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </MemoryRouter>
            
        );
        expect(component.getByText("Welcome sarahedo")).toBeInTheDocument();
    })
})