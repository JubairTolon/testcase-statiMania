import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from '../styles/Header.module.css'


type childrenProps = {
    children: React.ReactNode;
};
const Layout = (Props: childrenProps) => {
    return (
        <div>
            <Header /> <div>{Props.children}</div> <Footer />
        </div>
    );
};

export default Layout;