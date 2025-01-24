import { Routes, Route } from "react-router-dom";
import { Subscribe } from "./layouts";
import './App.css'

function App() {
  return (
<Routes>
  <Route path="/" element={<Subscribe/>}/>
</Routes>
  )
}

export default App
