import { ADD_VALUE_INPUT_CAT } from "./actionsType";
function inferLiteralFromString<T extends string>(arg: T): T{
    return arg;
    }

export const addValueInputCatecories = (value: string) => ({
    type: inferLiteralFromString(ADD_VALUE_INPUT_CAT),
    payload: value
 })