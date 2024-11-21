import { CHANGE_FILTER } from "./actionsType";
function inferLiteralFromString<T extends string>(arg: T): T{
    return arg;
    }

export const changeCategory = (category: string) => ({
    type: inferLiteralFromString(CHANGE_FILTER),
    payload: category
})