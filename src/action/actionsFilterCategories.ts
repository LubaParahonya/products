import { INITIAL_STATE_CATEGORY } from "./actionsType";
function inferLiteralFromString<T extends string>(arg: T): T{
    return arg;
    }

export const initStateCategory = (result: string[]) =>({
    type: inferLiteralFromString(INITIAL_STATE_CATEGORY),
    payload: result
})