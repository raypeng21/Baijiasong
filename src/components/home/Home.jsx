import React from 'react'
import Topbar from "../topbar/Topbar";
import Intro from "../Main/Main";
import About from "../about/About";
import News from "../news/News";
import Projects from "../project/Projects";
import Service from "../service/Service";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

export default function Home() {
    return (
        <div>
        <News />
        <Projects />
        <Service />
        <Contact />

        </div>
    )
}
