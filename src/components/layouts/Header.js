import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from '../ui/Button'
import styles from '../../styles/Header.module.css'

const Header = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    return (
        <div className={styles.header} >
            <div className={styles.topNav} >
                {!isLoggedIn &&
                    <ul className={styles.topLeftNav} >
                        <li><a href="0" >Contact us</a></li>
                        <li><a href="0" >About</a></li>
                    </ul>
                }

                <ul className={styles.topRightNav} >
                    {!isLoggedIn && 
                        <Fragment>
                            <li><Link to="/signup" >Sign up</Link></li>
                            <li><a href="0" >Log in</a></li>
                        </Fragment>
                    }
                    {isLoggedIn &&
                        <Fragment>
                            <li><Button onClick={} >Cart</Button></li>
                            <li><a href="0" >Log out</a></li>
                        </Fragment>
                    }

                </ul>
            </div>
        </div>
    )
}

export default Header