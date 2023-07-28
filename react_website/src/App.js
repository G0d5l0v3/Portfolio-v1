import { Routes, Route } from "react-router-dom"
import LandingPage from "./LandingPage/LandingPage";
import Content from "./LandingPage/Header/Content";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/techstack" element={<Content/>}/>
      </Routes>      
    </div>
  );
}

export default App;
