import React from "react"
import { Hero } from "../components/hero/Hero";
import "../styles/reset.scss";
import {Introduction} from "../components/introduction/Introduction";
import {Footer} from "../components/footer/Footer";

function IndexPage() {
    return (
        <main>
            <Hero/>
            <Introduction/>
            <Footer/>
        </main>
    );
}

export default IndexPage
