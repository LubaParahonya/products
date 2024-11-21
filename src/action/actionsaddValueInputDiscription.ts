import { ADD_VALUE_INPUT_DIS } from "./actionsType";
function inferLiteralFromString<T extends string>(arg: T): T{
    return arg;
    }


export const addValueInputDiscription = (value: string) => ({
    type: inferLiteralFromString(ADD_VALUE_INPUT_DIS),
    payload: value
 })