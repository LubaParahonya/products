import { INITIAL_STATE } from "../action/actionsType"
import { ActionTypesSearch } from "../typeListCard"

export const searchValue = (state: string = '', action: ActionTypesSearch):string => {
switch(action.type){
    case INITIAL_STATE:{
        return action.payload
    }
    default:
        return state
}
}