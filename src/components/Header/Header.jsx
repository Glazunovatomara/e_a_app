import styles from './header.module.css'

const Header = () => {
    return(
        
        <div className={styles.nav}>
            <div className={styles.search}>
                <svg width="26" height="23" viewBox="0 0 26 23" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="8" stroke-width="2"/>
                    <path d="M24 22C24.4359 22.3391 25.0642 22.2605 25.4033 21.8246C25.7424 21.3886 25.6638 20.7604 25.2279 20.4213L24 22ZM15 15L24 22L25.2279 20.4213L16.2279 13.4213L15 15Z" />
                </svg>
            </div>
            <div className = {styles.like}>
                <svg width="28" height="25" viewBox="0 0 28 25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.02999 10.1293C0.26607 17.6221 14.3516 23 14.3516 23C14.3516 23 27.69 17.4085 26.972 10.1293C26.5538 5.88912 25.2917 1.47455 21.3629 1.04409C18.0377 0.679758 14.3516 6.34379 14.3516 6.34379C14.3516 6.34379 10.1642 0.434707 6.63908 1.04409C2.73977 1.71815 1.46212 5.89074 1.02999 10.1293Z" stroke-width="2"/>
                </svg>
            </div>
            <button>Добавить</button>
        </div>
    )
}

export default Header