import SignUp from '../authentication/SignUp'
import styles from './Main.module.css'

const Main = () => {
    return (
        <div className={styles.body} >
            <SignUp />
        </div>
    )
}

export default Main