import React from 'react'
import styles from "./Header.module.css"
import { Link } from 'react-router-dom'

function Header() {
  return <header className={styles.header}>
    <div>
        <Link to="/">
            <img src="divar.svg" alt="pic" className={styles.logo} />
        </Link>
        <span>
            <img src="location.svg" alt="pic" />
            <p>تهران</p>
        </span>
    </div>
    <div>
       <Link to="/auth">
        <span>
            <img src="profile.svg" alt="pic" />
            <p>دیوار من</p>
        </span>
        </Link> 
     <Link to="/dashboard" className={styles.button}>ثبت اگهی</Link>
    </div>


         </header>
}

export default Header