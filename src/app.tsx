import React from 'react';
import './app.css';
import {useAppState, useAppStateDispatch} from "./context/app-context";

function App() {
    const appState = useAppState()
    const dispatch = useAppStateDispatch()
    return (
        <div className="App">
            <header className="App-header">
                <div>The ring-bearer is {appState.name ? `${appState.name} ${appState.surname}!` : `invisible.`}</div>
                {appState.name.length === 0 && <button onClick={() => dispatch({
                    type: 'update',
                    value: {name: 'Frodo', surname: 'Baggins'}
                })}>Remove Ring
                </button>}
                {appState.name.length > 0 && <button onClick={() => dispatch({
                    type: 'delete'
                })}>
                    Wear Ring
                </button>}
            </header>
        </div>
    );
}

export default App;
