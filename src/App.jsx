import React, { useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import "./App.css";
import { Analytics } from '@vercel/analytics/next';

const App = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode", !isDarkMode);
    };

    return (
        <div className={`app ${isDarkMode ? "dark" : ""}`}>
            <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <main>
                <About isDarkMode={isDarkMode} />
                <Projects isDarkMode={isDarkMode} />
                <Skills isDarkMode={isDarkMode} />
                <Contact isDarkMode={isDarkMode} />
            </main>
            <Analytics />
        </div>
    );
};

export default App;
