import React from 'react'
import style from './Pagination.module.css'
import { initfirstPageIndex } from '../../action/actionsFirstPageIndex.ts'
import { initLastPageIndex } from '../../action/actionsLastPageIndex.ts'
import { changePage} from '../../action/actionsCurrentPage.ts'
import { connect, useDispatch } from "react-redux";


type Props = {
  listCard: ICard[];
  totalCountElement: number;
  lastPageIndex: number;
  firstPageIndex: number;
};

const Pagination: React.FC<Props> = (props) => {
    const dispatch = useDispatch()
    const pagination = []
    let perPage = 6
    for(let i = 1; i <= Math.ceil(props.totalCountElement / perPage); i++){
        pagination.push(i)
    }

const handelSubmit = (el: number): void => {
    dispatch(changePage(el))
    dispatch(initLastPageIndex(el, perPage))
    dispatch(initfirstPageIndex(props.lastPageIndex, perPage))
}
  return (
    <div className={style.boxInput}>
    {pagination.map(el => (
        <button key={el} className={style.loadMore} onClick={()=> handelSubmit(el)}>{el}</button>
    ))}
    </div>
    
  )
}

const mapStateToProps = (state: Props) => ({ 
      listCard: state.listCard,
      totalCountElement : state.totalCountElement,
      lastPageIndex: state.lastPageIndex,
      firstPageIndex: state.firstPageIndex
}
)
export default connect(mapStateToProps)(Pagination);
