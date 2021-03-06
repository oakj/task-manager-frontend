// import styles
import styles from '../styles/Header.module.css'
// import SVG logo
import logo from '../assets/notepad-12-regular.svg'

// function Header(){} instead of const Header = () => {} because you can export default on arrow functions
// also most components will not ONLY return/render. Most will have JS code before returning
export default function Header ({ children }) { 

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img
                    className={styles.img}
                    src={logo} 
                    alt='notepad-logo'
                />
                <h1 className={styles.text}>a task manager app</h1>
            </div>
            <span className={styles.nav}>{children}</span>
        </div>
    )
}