import React from 'react'
import { connect } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import style from './Card.module.css'
import Item from '../Item/Item.tsx';

type Props = {
  listCard: ICard[];
  
}

const Card: React.FC<Props> = (props) => {
    const {id} = useParams<{id:string}>()
    const element = props.listCard.filter(el => {
      if(typeof id === 'string'){ 
        return el.id === parseInt(id)}})  

    const navigate = useNavigate()

  return (
    <div className={style.mainBoxCard}>
      <button onClick={() => navigate('/products')} className={style.back}>Вернуться на основную страницу</button>
      <Item
      id={element[0].id}
      title={element[0].title}
      isLike={element[0].isLike}
      catecories={element[0].catecories}
      price={element[0].price}
      discription={element[0].discription}
      url={element[0].url} 
      />
    </div>
    
  )
}

const mapStateToProps = (state: Props) => ({ 
      listCard: state.listCard
  })
  
  export default connect(mapStateToProps)(Card);
  
