import { ADD_INITIAL_STATE, EDIT_ITEM, IS_LIKE, DELETE_ITEM, ADD_ITEM } from "./actionsType"
function inferLiteralFromString<T extends string>(arg: T): T{
return arg;
}

let start = 100
export const initState = (result: ICard[]) => ({
    type: inferLiteralFromString(ADD_INITIAL_STATE),
    payload: result

})

export const editItem = (id: number, value: string ) =>({
    type: inferLiteralFromString(EDIT_ITEM),
    payload: {
     id: id,
     value: value
 
    }
  })

  export const isLikeToggle = (id:number) => ({
    type: inferLiteralFromString(IS_LIKE),
    payload: id
  })

  export const deleteItem = (id: number) => ({
    type: inferLiteralFromString(DELETE_ITEM),
    payload: id
  })

  export const additem = (inputValueTitle: string, valueInputCategory: string, 
                          valueInputDiscription: string, 
                          valueInputPrice: string ) => ({
    type: inferLiteralFromString(ADD_ITEM),
    payload: {
                 title: inputValueTitle,
                 catecories: valueInputCategory,
                 discription: valueInputDiscription,
                 price: valueInputPrice,
                 id: ++start
    }
 })