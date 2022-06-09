import React from 'react'
import styles from './Input.module.css'

const Input = props => {
    return (
        <React.Fragment>
            <label htmlFor={props.id} >{props.label}</label>
            <input id={props.id} className={styles.input} type={props.type == null? "text": props.type} />
        </React.Fragment>
    )
}
export default Input