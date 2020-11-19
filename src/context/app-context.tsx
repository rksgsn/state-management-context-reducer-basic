import React, {useContext, useReducer} from 'react'
import AppReducer from "./app-reducer";
import AppInterface from "../types/app-interface";
import AppDispatchType from "../types/app-dispatch-type";

const AppStateContext = React.createContext<AppInterface | undefined>(undefined)
const AppStateDispatch = React.createContext<AppDispatchType | undefined>(undefined)

interface AppContextProviderInterface {
    children: React.ReactNode;
}

function AppStateContextProvider({children}: AppContextProviderInterface) {
    const [state, dispatch] = useReducer(AppReducer, {name: '', surname: ''})
    return <AppStateContext.Provider value={state}>
        <AppStateDispatch.Provider value={dispatch}>
            {children}
        </AppStateDispatch.Provider>
    </AppStateContext.Provider>
}

function useAppState() {
    const context = useContext(AppStateContext)
    if (context === undefined) {
        throw new Error('useAppState must be used within an AppStateContextProvider')
    }
    return context
}

function useAppStateDispatch() {
    const context = useContext(AppStateDispatch)
    if (context === undefined) {
        throw new Error('useAppStateDispatch must be used within an AppStateContextProvider')
    }
    return context
}

export {
    AppStateContextProvider, useAppState, useAppStateDispatch
}