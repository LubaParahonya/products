import { combineReducers } from "redux";
import { listCard } from "../reducer/listCardReducer";
import { searchValue } from "../reducer/searchReducer";
import { filterReducer } from "../reducer/filterReducer";
import { filterActiv } from "../reducer/filterActiv";
import { titleValueReducer } from "../reducer/titleValueReducer";
import { currentPage, 
         firstPageIndex, 
         lastPageIndex, 
         totalCountElement } from "../reducer/pagination";
import { inputValueCatecories, 
         inputValueDiscription, 
         inputValuePrice,  
         inputValueTitle} from "../reducer/inputValueReducer";
import { filterLikeActive } from "../reducer/filterLikeActive";

export const rootReducer = combineReducers({
    listCard: listCard,
    searchValue: searchValue,
    filterReducer: filterReducer,
    filterActiv: filterActiv,
    titleValueReducer: titleValueReducer,
    totalCountElement : totalCountElement,
    currentPage: currentPage,
    lastPageIndex: lastPageIndex,
    firstPageIndex: firstPageIndex,
    inputValueTitle: inputValueTitle,
    inputValueCatecories: inputValueCatecories,
    inputValueDiscription: inputValueDiscription,
    inputValuePrice: inputValuePrice,
    filterLikeActive: filterLikeActive
    
})

// type rootReducerType = typeof rootReducer
// export type MainStateType = ReturnType<rootReducerType>
