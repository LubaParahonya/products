import { CHANGE_FILTER } from "../action/actionsType"
import { ActionTypesFilterActiv } from "../typeListCard"

export const filterActiv =( state: string = 'Все', action: ActionTypesFilterActiv): string => {
    switch(action.type){
        case CHANGE_FILTER: {
            return action.payload
        }
        default:
            return state
    }
}