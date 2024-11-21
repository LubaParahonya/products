import { TOGGLE_STATE_LIKE } from "../action/actionsType"
import { ActionTypesFilterLikeActiv } from "../typeListCard"

export const filterLikeActive = (state:string = 'Все', action: ActionTypesFilterLikeActiv): string => {
    switch(action.type){
        case TOGGLE_STATE_LIKE:{
            return action.payload
        }
        default:
            return state
    }
}