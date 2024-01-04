import React from "react";
import styles from "./TopCatagorySection.module.css";

export default function TopCatagorySection(){

    return(
        <>
        <div className={styles.catagory}>
            <div>
                <a href="/">
                    Home
                </a>
            </div>
            <div>
            <a href="/">
                    Alternays
                </a>
            </div>
            <div>
            <a href="/">
                    Practice Areas
                </a>
            </div>
            <div>
            <a href="/">
                    About Us
                </a>
            </div>
        </div>
        </>
    )
}