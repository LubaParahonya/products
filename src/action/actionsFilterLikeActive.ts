import { TOGGLE_STATE_LIKE } from "./actionsType";
function inferLiteralFromString<T extends string>(arg: T): T{
    return arg;
    }

export const toggleLike = (value: string) => ({
    type: inferLiteralFromString(TOGGLE_STATE_LIKE),
    payload: value
 })