import { INITIAL_STATE_CATEGORY } from "../action/actionsType"
import { ActionTypesFilterCategoties } from "../typeListCard"

export const filterReducer = (state: string[] =['Все'], action: ActionTypesFilterCategoties): string[] => {
    switch(action.type){
        case INITIAL_STATE_CATEGORY: {
           const {list} = action.payload
           const arrayCategory:string[] = []
            list.map((el: ICard) => arrayCategory.push(el.catecories))
            return ['Все', ... new Set(arrayCategory)]
           
        }
        default:
            return state
    }
}