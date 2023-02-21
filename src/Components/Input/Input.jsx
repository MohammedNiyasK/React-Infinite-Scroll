import React from 'react'
import './Input.css'

const Input = ({type,placeholder,onChange,name}) => {

    const onChangeHandler = (e) => {
      onChange(e)
    }
   
  return (
    <div className='control'>
        <input type={type} placeholder ={placeholder} name={name} onChange={onChangeHandler} 
        autoComplete='off'
        />
    </div>
  )
}

export default Input