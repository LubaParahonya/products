import { ADD_INITIAL_STATE, ADD_ITEM, DELETE_ITEM, EDIT_ITEM, IS_LIKE } from "../action/actionsType.ts"
import { ActionTypes } from "../typeListCard.ts"


export const listCard = (state: never[] = [], action: ActionTypes):never[] | ICard[] =>{
switch(action.type){
  case ADD_INITIAL_STATE: {
    const listData = action.payload.map((el:ICard) => {
      el.isLike = false
      return el
    })
    return [...listData]
  }
  case EDIT_ITEM: {
    const {id, value} = action.payload
      return [...state.map((el:ICard) => {
        if(el.id === id){
          el.title = value
          return el
        }else{
          return el
        }
      }
    )]
 
  }
  case IS_LIKE: {
    return state.map((el:ICard) => {
      if(el.id === action.payload){
        el.isLike = !el.isLike
        return el
      }else{
        return el
      }
    })
}
case DELETE_ITEM: {
  return state.filter((el:ICard) => el.id !== action.payload)
      
}
case ADD_ITEM: {
  const { title, id, catecories, discription, price} = action.payload;
  return  [ {
    id,
    catecories,
    discription, 
    price,
    title,
    isLike: false,
    url: 'https://image.pngaaa.com/190/2716190-middle.png'}, ...state,]
     };
    default:
            return state
}
}


