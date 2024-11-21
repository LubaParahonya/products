import { CHANGE_VALUE, INITIAL_STATE_TITLE } from "./actionsType"
function inferLiteralFromString<T extends string>(arg: T): T{
    return arg;
    }

export const initTitleValue = (valueTitle: string) => ({
    type: inferLiteralFromString(INITIAL_STATE_TITLE),
    payload: valueTitle
 })

 export const editTitile = (changevalue: string) =>({
    type: inferLiteralFromString(CHANGE_VALUE),
    payload: changevalue
 })
