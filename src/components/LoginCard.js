// import React
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
// import layouts
// import components
// import contexts
import { GlobalStore } from '../contexts/StoreContext'
// import styles
import styles from '../styles/LoginCard.module.css'
// import utils
import userLogin from '../utils/userLogin'


export default function Login() {
    const { user, setUser } = useContext(GlobalStore)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async (e) => {
        // call preventDefault() to prevent a browser reload/refresh (dont want to lose states before performing actions in the submit handler)
        e.preventDefault()
        console.log('LoginCard.js Submit')
        const payload = {
            "email": email,
            "password": password
        }
        console.log('payload', payload) // temp line
        const didUserLogin = await userLogin(payload)
        console.log('didUserLogin', didUserLogin)
        setUser(didUserLogin)
    }

    return (
        <>
            {
                !user.user.name ?
                    <div className={styles.container}>
                        <h1 className={styles.login}>Log In</h1>
                        <form className={styles.formstyle}>
                            <input className={styles.inputstyle} value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/>
                            <input className={styles.inputstyle} value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password"/>
                        </form>
                        <div className={styles.link_container}>
                            <span>Need an account?</span><Link className={styles.link} to="/signup">Sign up.</Link>
                        </div>
                        <div className={styles.btncontainer}><button className={styles.btn} onClick={onSubmit} type="submit">Login</button></div>
                    </div>
                :
                    <div className={styles.container}>
                        <h1 className={styles.login}>Log In</h1>
                        <p className={styles.p_style}>Hello {user.user.name}! You are now logged in.</p>
                        <div className={styles.link_container}>Go to your<Link className={styles.link} to="/">Dashboard</Link></div>
                    </div>  
            }
        </>

    )
}
