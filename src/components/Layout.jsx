import React from "react";
import styles from './css/Layout.module.css';
import Header from './Header';
import Footer from "./Footer";




export default function Layout(props){

    return(
        <div className={styles.layout}>
            <Header />

            <main>{props.children}</main>

            <Footer />
        </div>
        

    )
}