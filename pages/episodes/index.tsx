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
                    <span>
                        <Image className={styles.episode__content_single__image} src={'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={416} height={256} alt=''></Image>
                    </span>
                    <span>
                        <h2>Ep 1: How to build a world-class business brand</h2>
                    </span>
                    <span>
                        <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </span>
                    <span>
                        <Link className={styles.episode__content_single_link} href='/'>
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#503AE7" />
                                    <path d="M21.3334 16L12.4445 21.6452L12.4445 10.3548L21.3334 16Z" fill="white" />
                                </svg>
                            </span>
                            <span><h3>Listen Now</h3></span>
                        </Link>
                    </span>
                    <button><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="#503AE7" />
                        <path d="M27 17V18C26.998 19.6818 26.3906 21.3068 25.2888 22.5775C24.187 23.8482 22.6646 24.6797 21 24.92V28H24V30H16V28H19V24.92C17.3354 24.6797 15.813 23.8482 14.7112 22.5775C13.6094 21.3068 13.002 19.6818 13 18V17H15V18C15 19.3261 15.5268 20.5979 16.4645 21.5355C17.4021 22.4732 18.6739 23 20 23C21.3261 23 22.5979 22.4732 23.5355 21.5355C24.4732 20.5979 25 19.3261 25 18V17H27ZM20 21C20.7956 21 21.5587 20.6839 22.1213 20.1213C22.6839 19.5587 23 18.7956 23 18V13C23 12.2044 22.6839 11.4413 22.1213 10.8787C21.5587 10.3161 20.7956 10 20 10C19.2044 10 18.4413 10.3161 17.8787 10.8787C17.3161 11.4413 17 12.2044 17 13V18C17 18.7956 17.3161 19.5587 17.8787 20.1213C18.4413 20.6839 19.2044 21 20 21Z" fill="white" />
                    </svg>
                    </button>
                </div>
                <div className={styles.episode__content_single}>
                    <span>
                        <Image className={styles.episode__content_single__image} src={'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={416} height={256} alt=''></Image>
                    </span>
                    <span>
                        <h2>Ep 2: Getting the first 100 customers for your business</h2>
                    </span>
                    <span>
                        <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </span>
                    <span>
                        <Link className={styles.episode__content_single_link} href='/'>
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#503AE7" />
                                    <path d="M21.3334 16L12.4445 21.6452L12.4445 10.3548L21.3334 16Z" fill="white" />
                                </svg>
                            </span>
                            <span><h3>Listen Now</h3></span>
                        </Link>
                    </span>
                    <button><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="#503AE7" />
                        <path d="M27 17V18C26.998 19.6818 26.3906 21.3068 25.2888 22.5775C24.187 23.8482 22.6646 24.6797 21 24.92V28H24V30H16V28H19V24.92C17.3354 24.6797 15.813 23.8482 14.7112 22.5775C13.6094 21.3068 13.002 19.6818 13 18V17H15V18C15 19.3261 15.5268 20.5979 16.4645 21.5355C17.4021 22.4732 18.6739 23 20 23C21.3261 23 22.5979 22.4732 23.5355 21.5355C24.4732 20.5979 25 19.3261 25 18V17H27ZM20 21C20.7956 21 21.5587 20.6839 22.1213 20.1213C22.6839 19.5587 23 18.7956 23 18V13C23 12.2044 22.6839 11.4413 22.1213 10.8787C21.5587 10.3161 20.7956 10 20 10C19.2044 10 18.4413 10.3161 17.8787 10.8787C17.3161 11.4413 17 12.2044 17 13V18C17 18.7956 17.3161 19.5587 17.8787 20.1213C18.4413 20.6839 19.2044 21 20 21Z" fill="white" />
                    </svg>
                    </button>
                </div>
                <div className={styles.episode__content_single}>
                    <span>
                        <Image className={styles.episode__content_single__image} src={'https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11'} width={416} height={256} alt=''></Image>
                    </span>
                    <span>
                        <h2>Ep 3: Should I raise money for my startup, or not?</h2>
                    </span>
                    <span>
                        <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </span>
                    <span>
                        <Link className={styles.episode__content_single_link} href='/'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="16" fill="#503AE7" />
                                <path d="M21.3334 16L12.4445 21.6452L12.4445 10.3548L21.3334 16Z" fill="white" />
                            </svg>
                            <span><h3>Listen Now</h3></span>
                        </Link>
                    </span>
                    <button><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="#503AE7" />
                        <path d="M27 17V18C26.998 19.6818 26.3906 21.3068 25.2888 22.5775C24.187 23.8482 22.6646 24.6797 21 24.92V28H24V30H16V28H19V24.92C17.3354 24.6797 15.813 23.8482 14.7112 22.5775C13.6094 21.3068 13.002 19.6818 13 18V17H15V18C15 19.3261 15.5268 20.5979 16.4645 21.5355C17.4021 22.4732 18.6739 23 20 23C21.3261 23 22.5979 22.4732 23.5355 21.5355C24.4732 20.5979 25 19.3261 25 18V17H27ZM20 21C20.7956 21 21.5587 20.6839 22.1213 20.1213C22.6839 19.5587 23 18.7956 23 18V13C23 12.2044 22.6839 11.4413 22.1213 10.8787C21.5587 10.3161 20.7956 10 20 10C19.2044 10 18.4413 10.3161 17.8787 10.8787C17.3161 11.4413 17 12.2044 17 13V18C17 18.7956 17.3161 19.5587 17.8787 20.1213C18.4413 20.6839 19.2044 21 20 21Z" fill="white" />
                    </svg>
                    </button>
                </div>
            </div>
            <div className={styles.episode__content2}>
                <div className={styles.episode__content_single}>
                    <span>
                        <h1>Read our articles & news</h1>
                    </span>
                    <span>
                        <Link className={styles.episode__content_single_link} href='/'>
                            <span><h3>See More</h3></span>
                        </Link>
                    </span>
                    <div className={styles.episode__bars__container}>
                        <div className={styles.episode__content__bar1}></div>
                        <div className={styles.episode__content__bar2}></div>
                        <div className={styles.episode__content__bar3}></div>
                    </div>
                </div>
                <div className={styles.episode__content_single}>
                    <span>
                        <Image className={styles.episode__content_single__image_second} src={'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={416} height={256} alt=''></Image>
                    </span>
                    <span>
                        <h2>Getting the first 100 customers for your business</h2>
                    </span>
                    <span>
                        <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </span>
                    <span>
                        <Link className={styles.episode__content_single_link} href='/'>
                            <span><h3>Read Now</h3></span>
                        </Link>
                    </span>
                </div>
                <div className={styles.episode__content_single}>
                    <span>
                        <Image className={styles.episode__content_single__image_second} src={'https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={416} height={256} alt=''></Image>
                    </span>
                    <span>
                        <h2>Apparently we had reached a great height in the atmosphere, ...</h2>
                    </span>
                    <span>
                        <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </span>
                    <span>
                        <Link className={styles.episode__content_single_link} href='/'>
                            <span><h3>Read Now</h3></span>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Episodes;