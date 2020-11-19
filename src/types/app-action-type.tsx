import AppInterface from "./app-interface";

type AppActionType =
    | { type: 'update', value: AppInterface}
    | { type: 'delete'}
export default AppActionType