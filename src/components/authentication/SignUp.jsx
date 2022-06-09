import Input from '../ui/Input'
import styles from './SignUp.module.css'

const SignUp = () => {
    return (
        <form className={styles.signUpForm}>
            <h2>Sign Up</h2>
            <Input label="First Name" id="firstName" type="text" />
            <Input label="Last Name" id="lastName" type="text" />
            <Input label="Email" id="email" type="text" />
            <button>Sign Up</button>
        </form>
    )
}
export default SignUp