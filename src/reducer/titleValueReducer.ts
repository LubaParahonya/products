import { CHANGE_VALUE, INITIAL_STATE_TITLE } from "../action/actionsType"
import { ActionTypesTitleValue } from "../typeListCard"

export const titleValueReducer = (state: string = '', action: ActionTypesTitleValue):string =>{
switch(action.type){
    case INITIAL_STATE_TITLE:{
        return action.payload
    }
    case CHANGE_VALUE:{
        return action.payload
    }
default:
    return state
}
}