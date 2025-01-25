import { Routes, Route } from "react-router-dom";
import { Subscribe } from "./layouts";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<Subscribe/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
