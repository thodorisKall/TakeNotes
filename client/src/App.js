import "./App.css"
import Notes from "./pages/Notes"
import Nav from "./pages/Nav"
import Add from "./pages/Add"
import SingleNote from "./pages/SingleNote"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/notes' element={<Notes />} />
          <Route path='/add' element={<Add />} />
          <Route path='/notes/*' element={<SingleNote />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
