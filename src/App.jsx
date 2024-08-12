import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
  };
  return (
    <div
      className={`${dark ? "dark" : ""}`}
      data-bs-theme={`${dark ? "dark" : ""}`}
    >
      <Nav dark={dark} toggleDark={toggleDark} />
      <Hero />
    </div>
  );
}

export default App;
