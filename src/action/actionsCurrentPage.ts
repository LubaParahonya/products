import { CHANGE_CURRENT_PAGE } from "./actionsType";

function inferLiteralFromString<T extends string>(arg: T): T{
    return arg;
    }
export const changePage = (value: number) => ({
    type: inferLiteralFromString(CHANGE_CURRENT_PAGE),
    payload: value
 })