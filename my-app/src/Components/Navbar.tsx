import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
export const Navbar = () => {

    return (
        <div className={styles.main}>
            <Link className={styles.link} to={"/"}>Home</Link>
            <Link className={styles.link} to={"/login"}>Login</Link>
            <Link className={styles.link} to={"/signup"}>Signup</Link>
        </div>
    )
}

