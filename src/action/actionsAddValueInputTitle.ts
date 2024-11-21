import { ADD_VALUE_INPUT } from "./actionsType";
function inferLiteralFromString<T extends string>(arg: T): T{
    return arg;
    }

export const addValueInputTitle = (value: string) => ({
    type: inferLiteralFromString(ADD_VALUE_INPUT),
    payload: value
 })