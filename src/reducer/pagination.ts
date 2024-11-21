import { CHANGE_CURRENT_PAGE, INIT_FIRST_PAGE, INIT_LAST_PAGE, INIT_TOTAL_COUNT_ELEMENT } from "../action/actionsType"
import { ActionTypesCurrentPage, ActionTypesFirstPageIndex, ActionTypesLastPageIndex, ActionTypesTotalCountElement } from "../typeListCard"

export const totalCountElement = (state: number = 0, action: ActionTypesTotalCountElement):number => {
switch(action.type){
    case INIT_TOTAL_COUNT_ELEMENT:{
        return [...action.payload].length
    }
    default:
        return state
}
}

export const currentPage = (state: number = 1, action: ActionTypesCurrentPage):number => {
    switch(action.type){
        case CHANGE_CURRENT_PAGE:{
            return action.payload
        }
        default:
            return state
    }
    }
interface TLastPageIndex  {
    state?: number;
}
const initStateLastPageIndex:TLastPageIndex = {
    state: 1,
}
export const lastPageIndex = (state: number = initStateLastPageIndex.state as number, action: ActionTypesLastPageIndex):number=> {
        switch(action.type){
            case INIT_LAST_PAGE:{
                const {currentPage, perPage} = action.payload
                return currentPage * perPage

            }
            default:
                return state
        }
        }

export const firstPageIndex = (state: number = 1, action: ActionTypesFirstPageIndex):number => {
            switch(action.type){
                case INIT_FIRST_PAGE:{
                    const {lastPageIndex, perPage} = action.payload
                    return lastPageIndex - perPage
                }
                default:
                    return state
            }
            }
