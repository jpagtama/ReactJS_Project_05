import React, { forwardRef, useImperativeHandle } from 'react'
import useInput from '../../hooks/use-input'
import styles from './Input.module.css'

const Input = forwardRef((props,ref) => {
    const inputType = props.type == null? "text": props.type
    const {value,isValid,touched,errorMessage,changeHandler,blurHandler} = useInput(inputType,props.getValueValidity)

    useImperativeHandle(ref, () => ({
        value: value,
    }))

    return (
        <React.Fragment>
            <label htmlFor={props.id} >{props.label}</label> 
            {touched && !isValid && <span className={styles.error}>{errorMessage()}</span>}
            <input id={props.id} className={styles.input} type={inputType} value={value} onChange={changeHandler} onBlur={blurHandler} />
        </React.Fragment>
    )
})
export default Input