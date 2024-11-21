import { INIT_LAST_PAGE } from "./actionsType";

function inferLiteralFromString<T extends string>(arg: T): T{
    return arg;
    }
    export const initLastPageIndex = (currentPage: number, perPage: number) => ({
        type: inferLiteralFromString(INIT_LAST_PAGE),
        payload: {
            currentPage: currentPage, 
            perPage: perPage
        }
     })