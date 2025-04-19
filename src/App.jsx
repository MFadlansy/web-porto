import { useState, useEffect } from "react";
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle'; // ✅ Tambah ini
import ImageCoursel from './components/ImageCoursel'; // ini harus sesuai path
import Navbar from './components/Navbar'; // ← tambahkan ini di import




function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <Navbar />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Header />
      <main className="px-4 sm:px-8 md:px-16 max-w-5xl mx-auto space-y-24 py-10">
        <About />
        <ImageCoursel /> 
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
