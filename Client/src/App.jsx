import { Routes, Route } from "react-router-dom";
import { Home, Subscribe, AboutMe } from "./layouts";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<Subscribe/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
