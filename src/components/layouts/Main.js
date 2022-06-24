import SignUp from '../authentication/SignUp'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Welcome from '../pages/Welcome'
import styles from './Main.module.css'


const Main = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    return (
        <div className={styles.body} > 
            {!isLoggedIn && 
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
                
            }
            {isLoggedIn && <h2 style={{paddingTop: "8rem"}}>You are logged in</h2> }
        </div>
    )
}

export default Main