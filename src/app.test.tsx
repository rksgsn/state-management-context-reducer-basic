import React from 'react';
import {render} from '@testing-library/react';
import {fireEvent} from '@testing-library/dom'
import App from './app';
import {AppStateContextProvider} from "./context/app-context";

test('renders text when context has no value', () => {
    const {getByText} = render(<AppStateContextProvider>
        <App/>
    </AppStateContextProvider>);
    const textElement = getByText(/The ring-bearer is invisible/i);
    expect(textElement).toBeInTheDocument();
});

test('renders text when context has a value', () => {
    const container = render(<AppStateContextProvider>
        <App/>
    </AppStateContextProvider>);
    fireEvent.click(container.getByText(/Remove Ring/i))
    expect(container.getByText(/The ring-bearer is Frodo Baggins!/i)).toBeInTheDocument();
});
