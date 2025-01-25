import { Routes, Route } from "react-router-dom";
import { Subscribe } from "./layouts";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Subscribe/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
