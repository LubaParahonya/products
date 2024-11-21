import { useEffect} from 'react'
import './App.css'
import ListItem from './components/ListItem/ListItem'
import Edit from './components/Edit/Edit'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Card from './components/Card/Card'
import Add from './components/Add/Add'
import { useDispatch, useSelector, TypedUseSelectorHook  } from 'react-redux'
import { initLastPageIndex} from './action/actionsLastPageIndex'
import { initStateCategory} from './action/actionsFilterCategories'
import { initState, } from './action/actionsListCard'
import { inittotalCountElement } from './action/actionsTotalCountElement'

const API_DATA = 'https://lubaparahonya.github.io/api-free/api.json'
const setFilterCategory: string[] = []
let perPage = 6

function App() {
  interface RootState {
    currentPage: number
  }
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
  const dispatch = useDispatch()
  const currentPage = useTypedSelector(state => state.currentPage)
  const getApiData = async () => {
  const result = await fetch(API_DATA)
  .then(result => result.json())
  result.map((el: ICard) => (setFilterCategory.push(el.catecories)))
  dispatch(initState(result))
  // dispatch(initStateCategory(setFilterCategory))
  dispatch(inittotalCountElement(result))
  dispatch(initLastPageIndex(currentPage, perPage))
  }

  useEffect(()=>{
    getApiData()
  }, [dispatch])

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/products' element={<ListItem />}/>
      <Route path='/edit/:id' element={<Edit /> }/>
      <Route path='/products/:id' element={<Card />}/>
      <Route path='/create-product' element={<Add />}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
