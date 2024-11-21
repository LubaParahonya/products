import React from 'react'
import style from './Item.module.css'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from "react-redux";
import { initTitleValue } from '../../action/actionsTitleValueReducer.ts';
import { deleteItem, isLikeToggle } from '../../action/actionsListCard.ts';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { FaHeart } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

type Props = {
  titleValueReducer: string;
  title: string;
  id:number;
  catecories: string;
  url: string;
  discription: string;
  price: string;
  isLike: boolean

};

const Item: React.FC<Props> = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {id} = useParams<{id:string}>()
  console.log('id', id)

  const handelsubmit = (valueTitle: string, id:number): void => {
    dispatch(initTitleValue(valueTitle))
    navigate(`/edit/:${id}`)
  }

  return (
<div className={style.mainBox}>
<div  className={style.boxInfo} onClick={()=> {
      navigate(`/products/${props.id}`)}} >
    <img src={props.url} className={id ? style.url : style.urlNone} alt="logo" />
    <div className={style.textBox}>
    <span className={style.catecories}>{props.catecories} </span>
    <span className={style.title}>{props.title}</span>
    <span className={style.discription}>{id ? props.discription: null}</span>
    <span className={style.price}>{props.price} руб</span>
    </div>
</div>
<div className={style.buttongroup}>
<IconButton aria-label="delete" size="small" onClick={()=> dispatch(deleteItem(props.id))}>
  <DeleteIcon fontSize="inherit" />
</IconButton>
<IconButton aria-label="isLike" size="small" onClick={()=> dispatch(isLikeToggle(props.id))} className={props.isLike ? style.likeActiv: style.like}>
  <FaHeart />
</IconButton>
<IconButton aria-label="edit" size="small" onClick={() => handelsubmit(props.title, props.id) } >
  <AiFillEdit />
</IconButton>
</div>
</div> 
  )
}


const mapStateToProps = (state: Props) => ({ 
    titleValueReducer: state.titleValueReducer
  })

export default connect(mapStateToProps)(Item);


