import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import React from "react";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contact} from "./layout/sections/contact/Contact";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;
