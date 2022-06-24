import SignUp from '../authentication/SignUp'
import { useSelector } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router-dom'
import Welcome from '../pages/Welcome'
import Products from '../pages/Products'
import styles from './Main.module.css'


const Main = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    return (
        <div className={styles.body} > 
            {isLoggedIn && 
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            }
            {!isLoggedIn && 
                <Routes >
                    <Route path="/" element={<Navigate to="/signup" />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            }
        </div>
    )
}

export default Main