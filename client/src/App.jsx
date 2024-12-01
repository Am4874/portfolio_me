import { useState, useEffect } from "react";
import AnimatedIntro from "./Components/AnimatedIntro";
import { ThemeProvider } from "./context/theme";
import "./App.css";
import SkillsBar from "./Components/SkillsBar";
import ProjectsSection from "./Components/ProjectsSection";
import AboutSection from "./Components/AboutSection";
import ConnectMe from "./Components/ConnectMe";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.className = themeMode;
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, toggleTheme }}>
      <div className={`min-h-screen flex flex-col transition-colors`}>
        <Header />
        <main className="flex-1">
          <AnimatedIntro />
          <AboutSection />
          <SkillsBar />
          <ProjectsSection />
          <ConnectMe />
          <ScrollToTop />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
