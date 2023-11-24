import React from "react";
import Layout from "../components/Layout";
import Intro from "../sections/Intro";
import About from "../sections/About";


export default function MainPage(){



    return(
        <Layout >

           <Intro />
           <About />

        </Layout>
    )
}