
import style from './ListItem.module.css'
import Item from '../Item/Item'
import Filter from '../Filter/Filter'
import { connect, useDispatch } from "react-redux";
import Pagination from '../Pagination/Pagination.tsx'
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import Search from '../Search/Search.tsx'
import Like from '../Like/Like.tsx'
import { initStateCategory } from '../../action/actionsFilterCategories.ts';

type Props = {
  listCard: ICard[];
  filterActiv: string;
  searchValue: string;
  lastPageIndex: number;
  filterLikeActive: string
};

const ListItem: React.FC<Props> = (props) => {
  const navigate = useNavigate()
  const arr = props.listCard.slice(props.lastPageIndex-9, props.lastPageIndex)
  const dispatch = useDispatch()

  const getListByVisibilityFilter = (activ: string): ICard[] => {
    const allList = arr
    if(activ === 'Все'){
      return allList
    }else{
      return allList.filter(el => el.catecories === activ);
    }
   }
   const getListIsLikeFilter = (activ: string): ICard[] => {
    const allList = visiblList
    if(activ === 'Все'){
      return allList
    }else{
      return allList.filter(el => el.isLike === true);
    }
   }
  
  let getCurrentList = getListByVisibilityFilter(props.filterActiv)
  let visiblList =  getCurrentList.filter(el => el.title.toUpperCase().indexOf(props.searchValue.toUpperCase()) > -1)
  let getList = getListIsLikeFilter(props.filterLikeActive)
  dispatch(initStateCategory(getList))
  console.log(getList)
 
 

  return (
    <div className={style.mainBox}>
    <div className={style.mainPart}>
      <div className={style.blockButton}>
      <IoAddCircleOutline className={style.addButton} onClick={()=> navigate('/create-product')}/>
      <Search/>
      <Like/>
      </div>
    <div className={style.boxList}>
      {getList.map(el => (
        <Item 
        title={el.title}
        catecories={el.catecories}
        key={el.id}
        id={el.id}
        isLike={el.isLike}
        price={el.price}
        discription={el.discription}
        url={el.url}
        />
      ))}
       <Pagination 
       listButton ={getList}/>
    </div>
    </div>
    <Filter/>
    </div>
  )
}

const mapStateToProps = (state: Props) => ({ 
      listCard: state.listCard,
      filterActiv: state.filterActiv,
      searchValue: state.searchValue,
      lastPageIndex: state.lastPageIndex,
      filterLikeActive: state.filterLikeActive
})

export default connect(mapStateToProps)(ListItem);

