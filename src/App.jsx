
import About from "./pages/About"
import LandingPage from "./pages/LandingPage/LandingPage"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import MySkill from "./pages/MySkill"
import Project from "./pages/myProject"

function App() {

  return (
    <>
   
  <Router>
    <Routes>
      <Route path="/home" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/myskill" element={<MySkill />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  </Router>


    </>
  )
}

export default App
