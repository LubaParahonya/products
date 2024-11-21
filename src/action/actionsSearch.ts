import {   
        INITIAL_STATE,
        } from "./actionsType.ts";
function inferLiteralFromString<T extends string>(arg: T): T{
            return arg;
            }

export const initStateSearch = (result: string) =>({
    type: inferLiteralFromString(INITIAL_STATE),
    payload: result
})





