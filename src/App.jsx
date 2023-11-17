
import About from "./pages/About"
import LandingPage from "./pages/LandingPage/LandingPage"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

function App() {

  return (
    <>
   
  <Router>
    <Routes>
      <Route path="/home" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>


    </>
  )
}

export default App
