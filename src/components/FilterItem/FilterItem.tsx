import React from 'react'
import { useDispatch } from 'react-redux';
import { changeCategory } from '../../action/actionFilterActiv';
import { connect } from "react-redux";
import style from './FilterItem.module.css'

type Props = {
  catecories: string,
  filterActiv: string
};

const FilterItem: React.FC<Props> = (props) => {
const dispatch = useDispatch()

  return (
    <button className={style.item} onClick={() => dispatch(changeCategory(props.catecories))}>{props.catecories}</button>
  )
}

const mapStateToProps = (state: Props) => { 
  return {
    filterActiv: state.filterActiv,
  }
}

export default connect(mapStateToProps)(FilterItem);
