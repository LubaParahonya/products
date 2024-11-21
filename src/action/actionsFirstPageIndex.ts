import { INIT_FIRST_PAGE } from "./actionsType";

function inferLiteralFromString<T extends string>(arg: T): T{
    return arg;
    }
export const initfirstPageIndex = (lastPageIndex: number, perPage: number) => ({
    type: inferLiteralFromString(INIT_FIRST_PAGE),
    payload: {
        lastPageIndex: lastPageIndex, 
        perPage: perPage
    }
 })
