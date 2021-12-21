import React from 'react'
import Topbar from "../topbar/Topbar";
import Intro from "../Main/Main";
import About from "../about/About";
import News from "../news/News";
import Projects from "../project/Projects";
import Service from "../service/Service";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import "./home.scss"

export default function Home() {
    return (
        <div className="home">
            <div className="imgContainer">

            <img src="/assets/background.jpg" alt="" />

            </div>

            <Projects />
            <Service />
            <Contact />

        </div>
    )
}
