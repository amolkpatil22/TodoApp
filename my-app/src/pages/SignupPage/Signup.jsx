import styles from "./Signup.module.css"

export const SignupPage = () => {
    return (
        <div className={styles.main}>
            <h2 className={styles.heading}>Sign-up Form</h2>
            <form className={styles.form}>

                <label className={styles.label}>Name:</label>
                <input className={styles.input} type="text" />


                <label className={styles.label}>Email:</label>
                <input className={styles.input} type="email" />


                <label className={styles.label}>Password:</label>
                <input className={styles.input} type="text" />

                <button className={styles.submit_btn} type="submit">Submit</button>
            </form >
        </div >
    )
}