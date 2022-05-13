import styles from './Header.module.css'

const Header = () => {

    return (
        <div className={styles.header} >
            <div className={styles.topNav} >
                <ul className={styles.topLeftNav} >
                    <li><a href="0" >Contact us</a></li>
                    <li><a href="0" >About</a></li>
                </ul>

                <ul className={styles.topRightNav} >
                    <li><a href="0" >Sign up</a></li>
                    <li><a href="0" >Log in</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header