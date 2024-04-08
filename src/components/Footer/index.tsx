import React from "react";
import styles from "./Footer.module.scss"

const Footer:React.FC=()=> {
    return (
        <footer className={styles.footer}>
            "Glazunov" All rights reserved &copy;
        </footer>
    );
};

export default Footer;