import { ADD_VALUE_INPUT_PRICE } from "./actionsType";
function inferLiteralFromString<T extends string>(arg: T): T{
    return arg;
    }

export const addValueInputPrice = (value: string) => ({
    type: inferLiteralFromString(ADD_VALUE_INPUT_PRICE),
    payload: value
 })