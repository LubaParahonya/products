import React from 'react'
import { toggleLike } from '../../action/actionsFilterLikeActive'
import { connect, useDispatch } from "react-redux";
import style from './Like.module.css'

type Props = {
  filterLikeActive: string;
};

const Like: React.FC<Props> = () => {
  const dispatch = useDispatch()
  return (
    <div className={style.mainboxLike}>
        <button onClick={()=> {
          dispatch(toggleLike('Все'))
          }} className={style.buttonlike}>Все</button>

        <button onClick={()=> {
          dispatch(toggleLike('Избранное'))
          }} className={style.buttonlike}>Избранное</button>
      
    </div>
  )
}


const mapStateToProps = (state: Props ) => { 
    return {
        filterLikeActive: state.filterLikeActive
    }
}

export default connect(mapStateToProps)(Like);
