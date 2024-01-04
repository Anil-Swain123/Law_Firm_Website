import React from "react";
import mailIcon from "../../assets/mail_Icon.svg";
import styles from "./Search.module.css";

function Search({placeholder}) {

    return (
            <div className= {styles.search}>
                <form className= {styles.mailBox} >
                <img className={styles.mailLogo} src={mailIcon} alt="mail_logo" />
                <input className={styles.input} required placeholder={placeholder} />
                </form>
                <button className={styles.letsTalk} type="submit">
                    Lets Talk
                </button>
            </div>
    )
}
export default Search;