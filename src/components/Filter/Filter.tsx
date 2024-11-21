import React from 'react'
import FilterItem from '../FilterItem/FilterItem.tsx'
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import style from './Filter.module.css'

type Props = {
  filterReducer: string[]; 
};

const Filter: React.FC<Props> = (props) => {
  return (
    <div className={style.boxFilterCategory}>
      {props.filterReducer.map(el => (
        <FilterItem 
        catecories={el}
        key={uuidv4()}/>
      ))}
    </div>
  )
}

const mapStateToProps = (state: Props) => ({ 
  filterReducer: state.filterReducer
})

export default connect(mapStateToProps)(Filter);


