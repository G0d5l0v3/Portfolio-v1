import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Header from "./LandingPage/Header/Header";
import Content from "./LandingPage/Content/Content";
import Project from "./LandingPage/Content/Project";
import Contact from "./LandingPage/Content/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<Header />} />
        <Route path="/techstack" element={<Content />} />
        <Route path="projects" element={<Project />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
