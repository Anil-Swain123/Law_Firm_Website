import React from "react";
import styles from "./FrontPage.module.css";
import TopCatagorySection from "../TopCatagorySection/TopCatagorySection";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Search from "../Search/Search";
import frontpage2 from "../../assets/frontpage2.svg";

export default function FrontPage(){

    return(
        <>
        <div className={styles.FrontPage}>
        <div className={styles.topheading}>
        <Logo />
        <TopCatagorySection />
        <Button>Contact Now</Button> 
        </div>
        <div className={styles.middleHeading}>
            <div className={styles.middleHeading1} >
                <p className={styles.heading1}>
                You don’t have to
                <p className={styles.heading2}> 
                Fight them Alone.
                </p>
                </p>
                <div className={styles.head3}>
                Lorem ipsum dolor st amet consectetur adipiscing elit blandit, 
                curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, 
                hac massa gravida arcu interdum proin curae.
                </div>
                <Search 
                placeholder="Enter your email address"
                />
            </div>
            <div className={styles.imageSectionBackground}>
            <img src={frontpage2} alt="frontPageImage" />
            </div>
        </div>
        </div>
        </>
    )
}