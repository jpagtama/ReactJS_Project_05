import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header} >
            <ul className={styles.topRightNav} >
                <li><a href="#" >Log in</a></li>
                <li><a href="#" >About</a></li>
            </ul>
        </div>
    )
}

export default Header