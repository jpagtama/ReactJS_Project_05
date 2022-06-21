import SignUp from '../authentication/SignUp'
import { useSelector } from 'react-redux'
import styles from './Main.module.css'


const Main = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    return (
        <div className={styles.body} >
            {!isLoggedIn && <SignUp />}
            {isLoggedIn && <h2 style={{paddingTop: "8rem"}}>You are logged in</h2> }
        </div>
    )
}

export default Main