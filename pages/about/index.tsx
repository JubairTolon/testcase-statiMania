import React from 'react';
import styles from '../../styles/About.module.css';

const About = () => {
    return (
        <div className={styles.about__container}>
            <div className={styles.about__content}>
                <h1>About Finsweet Podcast</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                <button>Subscribe Now!</button>
            </div>
        </div>
    );
};

export default About;