import SignUp from '../authentication/SignUp'
import { useSelector } from 'react-redux'
import styles from './Main.module.css'


const Main = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn)

    return (
        <div className={styles.body} >
            {!isLoggedIn && <SignUp />}
        </div>
    )
}

export default Main