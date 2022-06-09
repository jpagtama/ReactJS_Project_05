import styles from './SignUp.module.css'

const SignUp = () => {
    return (
        <form className={styles.signUpForm}>
            <label>First Name</label>
            <input />
            <label>Last Name</label>
            <input />
            <label>Email</label>
            <input />
            <button>Sign Up</button>
        </form>
    )
}
export default SignUp