import styles from "./Login.module.css"

export const LoginPage = () => {
    return (
        <div className={styles.main}>
            <h2 className={styles.heading}>Login</h2>
            <form className={styles.form}>


                <label className={styles.label}>Email:</label>
                <input className={styles.input} type="email" />


                <label className={styles.label}>Password:</label>
                <input className={styles.input} type="text" />

                <button className={styles.submit_btn} type="submit">Submit</button>
            </form >
        </div >
    )
}