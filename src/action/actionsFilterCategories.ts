import { INITIAL_STATE_CATEGORY } from "./actionsType";
function inferLiteralFromString<T extends string>(arg: T): T{
    return arg;
    }

export const initStateCategory = (list :ICard[]) =>({
    type: inferLiteralFromString(INITIAL_STATE_CATEGORY),
    //payload: result
    payload : {
    list
   }
   
})