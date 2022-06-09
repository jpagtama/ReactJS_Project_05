import { useState,useEffect } from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'
import styles from './SignUp.module.css'

const SignUp = () => {
    const [isValid, setIsValid] = useState(false)
    const [firstNameIsValid, setFirstNameIsValid] = useState(false)
    const [lastNameIsValid, setLastNameIsValid] = useState(false)
    const [emailIsValid, setEmailIsValid] = useState(false)
    useEffect(() => {
        setIsValid(firstNameIsValid && lastNameIsValid && emailIsValid)
    }, [firstNameIsValid,lastNameIsValid,emailIsValid])

    const submitHandler = event => {
        event.preventDefault()
        if (!isValid) alert("The form is not valid!")
    }
    const firstNameValidityHandler = (isValid) => {
        setFirstNameIsValid(isValid)
    }
    const lastNameValidityHandler = (isValid) => {
        setLastNameIsValid(isValid)
    }
    const emailValidityHandler = (isValid) => {
        setEmailIsValid(isValid)
    }

    return (
        <form className={styles.signUpForm} onSubmit={submitHandler}>
            <h2>Sign Up</h2>
            <Input label="First Name" id="firstName" type="text" getValueValidity={firstNameValidityHandler} />
            <Input label="Last Name" id="lastName" type="text" getValueValidity={lastNameValidityHandler}/>
            <Input label="Email" id="email" type="email" getValueValidity={emailValidityHandler}/>
            <section className={styles.actions}>
                <Button type="submit" className={styles.signUpButton} >Sign Up</Button>
            </section>
        </form>
    )
}
export default SignUp