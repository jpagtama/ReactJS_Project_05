import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header} >
            <div className={styles.topNav} >
                <ul className={styles.topLeftNav} >
                    <li><a href="#" >Contact us</a></li>
                    <li><a href="#" >About</a></li>
                </ul>

                <ul className={styles.topRightNav} >
                    <li><a href="#" >Sign up</a></li>
                    <li><a href="#" >Log in</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header