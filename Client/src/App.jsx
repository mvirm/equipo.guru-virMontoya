import { Routes, Route } from "react-router-dom";
import { Home, Subscribe } from "./layouts";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<Subscribe/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
