import React from 'react'
import useInput from '../../hooks/use-input'
import styles from './Input.module.css'

const Input = (props) => {
    const inputType = props.type == null? "text": props.type
    const {value,isValid,touched,errorMessage,changeHandler,blurHandler} = useInput(inputType,props.getValueValidity)

    return (
        <React.Fragment>
            <label htmlFor={props.id} >{props.label}</label> 
            {touched && !isValid && <span className={styles.error}>{errorMessage()}</span>}
            <input id={props.id} className={styles.input} type={inputType} value={value} onChange={changeHandler} onBlur={blurHandler} />
        </React.Fragment>
    )
}
export default Input