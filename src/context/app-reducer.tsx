import AppInterface from "../types/app-interface";
import AppActionType from "../types/app-action-type";

export default function AppReducer(state: AppInterface, action: AppActionType): AppInterface {
    switch (action.type) {
        case 'update':
            return {
                ...state,
                ...action.value
            }
        case "delete":
            return {
                ...state,
                name: '',
                surname: ''
            }
        default:
            throw new Error(`Invalid AppStateReducer action type.`)
    }
}