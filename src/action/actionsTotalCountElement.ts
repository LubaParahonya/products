import { INIT_TOTAL_COUNT_ELEMENT } from "./actionsType";
function inferLiteralFromString<T extends string>(arg: T): T{
    return arg;
    }

export const inittotalCountElement = (value: ICard[]) => ({
    type: inferLiteralFromString(INIT_TOTAL_COUNT_ELEMENT),
    payload: value
 })