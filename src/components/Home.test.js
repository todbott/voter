import { render } from '@testing-library/react';
import Home from './Home';
import Login from './Login';
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import users from '../reducers/users';
import questions from "../reducers/questions";
import logger from "../middleware/logger";
import thunk from "redux-thunk";
import { loadingBarReducer } from "react-redux-loading-bar"
import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';


const reducers = ({
    users,
    questions,
    logger,
    loadingBar: loadingBarReducer
})
const store = configureStore({ reducer: reducers, middleware: [thunk, logger] })

beforeEach(() => {
    localStorage.setItem('user', "sarahedo")
});

afterEach(() => {
    localStorage.clear();
});

describe('Home', () => {
    it('matches the snapshot we have on file', () => {

        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Home />
                </Provider>
            </MemoryRouter>

        );
        expect(component).toMatchSnapshot();
    })

    it('shows the "Show Old Questions" button by default', () => {

        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Home />
                </Provider>
            </MemoryRouter>

        );
        expect(component.getByTestId('show-polls-button')).toContainHTML("Show Old Questions")
    })

    it('toggles the text of the button to "Show New Questions" when clicked', () => {

        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Home />
                </Provider>
            </MemoryRouter>

        );
        var showPollsButton = component.getByTestId('show-polls-button');
        fireEvent.click(showPollsButton);
        expect(component.getByTestId('show-polls-button')).toContainHTML("Show New Questions")
    })
});