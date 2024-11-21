import { ADD_VALUE_INPUT, ADD_VALUE_INPUT_CAT, 
         ADD_VALUE_INPUT_DIS, ADD_VALUE_INPUT_PRICE } from "../action/actionsType"
import { ActionTypesInputValueCategories, 
         ActionTypesInputValueDiscription, 
         ActionTypesInputValuePrice, 
         ActionTypesInputValueTitle } from "../typeListCard"

export const inputValueTitle = (state: string ='', action: ActionTypesInputValueTitle): string => {
    switch(action.type){
        case ADD_VALUE_INPUT: {
            return  action.payload
        }
        default:
            return state

    }
}
export const inputValueCatecories = (state: string ='', action: ActionTypesInputValueCategories): string => {
    switch(action.type){
        case ADD_VALUE_INPUT_CAT: {
            return  action.payload
        }
        default:
            return state

    }
}
export const inputValueDiscription = (state: string ='', action: ActionTypesInputValueDiscription): string => {
    switch(action.type){
        case ADD_VALUE_INPUT_DIS: {
            return  action.payload
        }
        default:
            return state

    }
}
export const inputValuePrice = (state: string = '', action: ActionTypesInputValuePrice): number | string => {
    switch(action.type){
        case ADD_VALUE_INPUT_PRICE: {
            return  action.payload
        }
        default:
            return state

    }
}