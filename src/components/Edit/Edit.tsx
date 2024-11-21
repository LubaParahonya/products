import React from 'react'
import style from './Edit.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { connect, useDispatch } from "react-redux";
import { editTitile } from '../../action/actionsTitleValueReducer.ts';
import { editItem } from '../../action/actionsListCard.ts';

type Props = {
  titleValueReducer: string;
};

const Edit: React.FC<Props> = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams<{id: string | undefined}>()
    const cardId = parseInt(id? id.slice(1): '0')
   
    const handelsubmitTitle = (id:number, value: string):void => {
      dispatch(editItem(id, value))
      navigate('/products')
    }
  return (
    <form className={style.formBox}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" value={props.titleValueReducer} onChange={(e)=> dispatch(editTitile(e.target.value))}/>
      <label htmlFor="category">Categories</label>
      <input type="text" id="category" />
      <button onClick={()=> handelsubmitTitle(cardId, props.titleValueReducer)}>Сохранить</button>
    </form>
  )
}


const mapStateToProps = (state: Props) => ({ 
    titleValueReducer: state.titleValueReducer
})

export default connect(mapStateToProps)(Edit);



