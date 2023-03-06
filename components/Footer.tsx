import React from 'react';
import styles from '../styles/Footer.module.css'


const Footer = () => {
    return (
        <footer className={styles.footer__container}>
            <div className={styles.footer__wrapper}>
                <div className={styles.footer__content__wrapper}></div>
                <div className={styles.footer__content__wrapper}></div>
                <div className={styles.footer__content__wrapper}></div>
                <div className={styles.footer__content__wrapper}></div>
            </div>
            <div></div>
        </footer>
    );
};

export default Footer;