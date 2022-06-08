import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer} >
            <div className={styles.container}>
                <div className={styles.contentBlock} >
                    <h4>Company</h4>
                    <ul>
                        <li><a href="0" >About Us</a></li>
                        <li><a href="0" >Careers</a></li>
                        <li><a href="0" >Support</a></li>
                        <li><a href="0" >Terms of Service</a></li>
                        <li><a href="0" >Privacy Policy</a></li>
                    </ul>
                </div>
                <div className={styles.contentBlock}>
                    <h4>Your Profile</h4>
                    <ul>
                        <li><a href="0" >My Account</a></li>
                        <li><a href="0" >Settings</a></li>
                        <li><a href="0" >My Cart</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer