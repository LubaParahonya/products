import React from 'react'
import { useDispatch } from 'react-redux'
import { connect } from "react-redux";
import style from './Search.module.css'
import { initStateSearch } from '../../action/actionsSearch';

type Props = {
  searchValue: string;
};

const Search: React.FC<Props> = (props) => {
    const dispatch = useDispatch()
  return (
      <input className={style.inputSearch} type='text' onChange={(e)=> dispatch(initStateSearch(e.target.value))} value={props.searchValue} placeholder='Search...'></input>
  )
}

const mapStateToProps = (state: Props) => ({ 
      searchValue: state.searchValue,
  })
  
  export default connect(mapStateToProps)(Search);
  
