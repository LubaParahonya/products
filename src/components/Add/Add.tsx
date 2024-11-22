import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {addValueInputPrice } from '../../action/actionsAddValueInputPric.ts'
import {addValueInputTitle } from '../../action/actionsAddValueInputTitle.ts'
import { addValueInputCatecories} from '../../action/actionsaddValueInputCatecories.ts'
import { additem} from '../../action/actionsListCard.ts'
import {addValueInputDiscription} from '../../action/actionsaddValueInputDiscription.ts'
import style from './Add.module.css'

type Props = {
  inputValueTitle: string;
  inputValueCatecories: string;
  inputValueDiscription: string;
  inputValuePrice: number
};
const Add: React.FC<Props> = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handelSubmitInput: React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        e.preventDefault()
        dispatch(addValueInputTitle(e.target.value))
    }
    const handelSubmitInputCategory: React.ChangeEventHandler<HTMLInputElement> = (e) =>{
      e.preventDefault()
      dispatch(addValueInputCatecories(e.target.value))
  }
    const handelSubmitInputDiscription: React.ChangeEventHandler<HTMLInputElement> = (e) =>{
      e.preventDefault()
      dispatch(addValueInputDiscription(e.target.value))
}
    const handelSubmitInputPrice: React.ChangeEventHandler<HTMLInputElement> = (e) =>{
      e.preventDefault()
      dispatch(addValueInputPrice(e.target.value))
}

const validationForm = ()=>{
  if(props.inputValueTitle.length < 3 || props.inputValueTitle.length > 70||
     props.inputValueCatecories.length < 3 || props.inputValueCatecories.length > 70 ||
     props.inputValueDiscription.length < 3 || props.inputValueDiscription.length > 70 ){
    alert('вводимое значение должно состоять больше чем из 3-ох букв, но  меньше чем 60')
  }if(props.inputValueTitle.length === 0 ||
     props.inputValueCatecories.length === 0 ||
     props.inputValueDiscription.length === 0 
  ){
    alert('Вы заполнили не все ячейки')
  }
  
}
    const handelSubmitAdd: React.MouseEventHandler<HTMLButtonElement> = (e) =>{
        validationForm()
        dispatch(additem(props.inputValueTitle, props.inputValueCatecories, props.inputValueDiscription, props.inputValuePrice))
        e.preventDefault()
        dispatch(addValueInputTitle(''))
        dispatch(addValueInputCatecories(''))
        dispatch(addValueInputDiscription(''))
        dispatch(addValueInputPrice(''))
    }
    const handelSubmit:React.MouseEventHandler<HTMLButtonElement> = (e) =>{
      e.preventDefault()
      navigate('/products')
  }
  return (
    <div className={style.main}>
      <form className={style.formInput}>
      <span className={style.name}>Форма для создания карточки</span>
      <input type='text' onChange={(e) => handelSubmitInput(e)} value={props.inputValueTitle} className={style.inputBox} placeholder='Введите название'/>
      <input type='text' onChange={(e) => handelSubmitInputCategory(e)} value={props.inputValueCatecories} className={style.inputBox} placeholder='Введите категорию'/>
      <input type='text' onChange={(e) => handelSubmitInputDiscription(e)} value={props.inputValueDiscription} className={style.inputBox} placeholder='Введите описание'/>
      <input type='number' onChange={(e) => handelSubmitInputPrice(e)} value={props.inputValuePrice} className={style.inputBox} placeholder='Введите цену'/>
      <button onClick={(e) => handelSubmitAdd(e)} className={style.inputBox}>Добавить карточку</button>
      <button onClick={(e)=> handelSubmit(e)} className={style.inputBox}>Вернуться на гланую</button>
    </form>
    </div>
  )
}


const mapStateToProps = (state: Props) => ({ 
      inputValueTitle: state.inputValueTitle,
      inputValueCatecories: state.inputValueCatecories,
      inputValueDiscription: state.inputValueDiscription,
      inputValuePrice: state.inputValuePrice
  })
  
  export default connect(mapStateToProps)(Add);