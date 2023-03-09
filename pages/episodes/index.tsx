import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/HomeConrainer.module.css'


const Episodes = () => {
    return (
        <div className={styles.epispdes__wrapper}>
            <h1>Recent Episodes</h1>
            <div className={styles.episode__info}>
                <span className={styles.episode__info__text}>
                    <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</p>
                </span>
                <button>See All Episiodes</button>
            </div>
            <div className={styles.episode__content}>
                <div className={styles.episode__content_single}>
                    <Image className={styles.episode__content_single__image} src={'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={416} height={256} alt=''></Image>
                    <span>
                        <h2>Ep 1: How to build a world-class business brand</h2>
                    </span>
                    <span>
                        <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </span>
                    <button className={styles.episode__content__single__link}>
                        <span className={styles.episode__content__single__play__button}>
                            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.33337 5.99996L0.444486 11.6452L0.444487 0.354761L9.33337 5.99996Z" fill="white" />
                            </svg>
                        </span>
                        <h3>Listen Now</h3>
                    </button>
                    <button className={styles.episode__content__single__record__button}>
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 7V8C13.998 9.68185 13.3906 11.3068 12.2888 12.5775C11.187 13.8482 9.6646 14.6797 8 14.92V18H11V20H3V18H6V14.92C4.3354 14.6797 2.81295 13.8482 1.71118 12.5775C0.609407 11.3068 0.00197111 9.68185 0 8V7H2V8C2 9.32608 2.52678 10.5979 3.46447 11.5355C4.40215 12.4732 5.67392 13 7 13C8.32608 13 9.59785 12.4732 10.5355 11.5355C11.4732 10.5979 12 9.32608 12 8V7H14ZM7 11C7.79565 11 8.55871 10.6839 9.12132 10.1213C9.68393 9.55871 10 8.79565 10 8V3C10 2.20435 9.68393 1.44129 9.12132 0.87868C8.55871 0.316071 7.79565 0 7 0C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V8C4 8.79565 4.31607 9.55871 4.87868 10.1213C5.44129 10.6839 6.20435 11 7 11Z" fill="white" />
                        </svg>
                    </button>
                </div>
                <div className={styles.episode__content_single}>
                    <Image className={styles.episode__content_single__image} src={'https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11'} width={416} height={256} alt=''></Image>
                    <span>
                        <h2>Ep 2: How to build a world-class business brand</h2>
                    </span>
                    <span>
                        <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </span>
                    <button className={styles.episode__content__single__link}>
                        <span className={styles.episode__content__single__play__button}>
                            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.33337 5.99996L0.444486 11.6452L0.444487 0.354761L9.33337 5.99996Z" fill="white" />
                            </svg>
                        </span>
                        <h3>Listen Now</h3>
                    </button>
                    <button className={styles.episode__content__single__record__button}>
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 7V8C13.998 9.68185 13.3906 11.3068 12.2888 12.5775C11.187 13.8482 9.6646 14.6797 8 14.92V18H11V20H3V18H6V14.92C4.3354 14.6797 2.81295 13.8482 1.71118 12.5775C0.609407 11.3068 0.00197111 9.68185 0 8V7H2V8C2 9.32608 2.52678 10.5979 3.46447 11.5355C4.40215 12.4732 5.67392 13 7 13C8.32608 13 9.59785 12.4732 10.5355 11.5355C11.4732 10.5979 12 9.32608 12 8V7H14ZM7 11C7.79565 11 8.55871 10.6839 9.12132 10.1213C9.68393 9.55871 10 8.79565 10 8V3C10 2.20435 9.68393 1.44129 9.12132 0.87868C8.55871 0.316071 7.79565 0 7 0C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V8C4 8.79565 4.31607 9.55871 4.87868 10.1213C5.44129 10.6839 6.20435 11 7 11Z" fill="white" />
                        </svg>
                    </button>
                </div>
                <div className={styles.episode__content_single}>
                    <Image className={styles.episode__content_single__image} src={'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={416} height={256} alt=''></Image>
                    <span>
                        <h2>Ep 3: How to build a world-class business brand</h2>
                    </span>
                    <span>
                        <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </span>
                    <button className={styles.episode__content__single__link}>
                        <span className={styles.episode__content__single__play__button}>
                            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.33337 5.99996L0.444486 11.6452L0.444487 0.354761L9.33337 5.99996Z" fill="white" />
                            </svg>
                        </span>
                        <h3>Listen Now</h3>
                    </button>
                    <button className={styles.episode__content__single__record__button}>
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 7V8C13.998 9.68185 13.3906 11.3068 12.2888 12.5775C11.187 13.8482 9.6646 14.6797 8 14.92V18H11V20H3V18H6V14.92C4.3354 14.6797 2.81295 13.8482 1.71118 12.5775C0.609407 11.3068 0.00197111 9.68185 0 8V7H2V8C2 9.32608 2.52678 10.5979 3.46447 11.5355C4.40215 12.4732 5.67392 13 7 13C8.32608 13 9.59785 12.4732 10.5355 11.5355C11.4732 10.5979 12 9.32608 12 8V7H14ZM7 11C7.79565 11 8.55871 10.6839 9.12132 10.1213C9.68393 9.55871 10 8.79565 10 8V3C10 2.20435 9.68393 1.44129 9.12132 0.87868C8.55871 0.316071 7.79565 0 7 0C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V8C4 8.79565 4.31607 9.55871 4.87868 10.1213C5.44129 10.6839 6.20435 11 7 11Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Episode content 2 */}
            <div className={styles.episode__content2}>
                <div className={styles.episode__content_single}>
                    <span>
                        <h1>Read our articles & news</h1>
                        <button>See More
                        </button>
                    </span>
                    <div className={styles.episode__bars__container}>
                        <div className={styles.episode__content__bar1}></div>
                        <div className={styles.episode__content__bar2}></div>
                        <div className={styles.episode__content__bar3}></div>
                    </div>
                </div>
                <div className={styles.episode__content_single}>
                    <Image className={styles.episode__content2_single__image} src={'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={416} height={256} alt=''></Image>
                    <h2>Getting the first 100 customers for your business</h2>
                    <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    <button>Read Now
                    </button>
                </div>
                <div className={styles.episode__content_single}>
                    <Image className={styles.episode__content2_single__image} src={'https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={416} height={256} alt=''></Image>
                    <h2>Getting the first 100 customers for your business</h2>
                    <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    <button>Read Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Episodes;