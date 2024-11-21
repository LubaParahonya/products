import { INITIAL_STATE_CATEGORY } from "../action/actionsType"
import { ActionTypesFilterCategoties } from "../typeListCard"

export const filterReducer = (state: string[] =['Все'], action: ActionTypesFilterCategoties): string[] => {
    switch(action.type){
        case INITIAL_STATE_CATEGORY: {
            return ['Все', ... new Set(action.payload)]
           
        }
        default:
            return state
    }
}