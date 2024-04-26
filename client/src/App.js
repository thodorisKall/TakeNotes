import "./App.css"
import Notes from "./pages/Notes"
import Nav from "./pages/Nav"
import Add from "./pages/Add"
import SingleNote from "./pages/SingleNote"
import Update from "./pages/Update"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./style.css"

function App() {
  return (
    <div className='my_root'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/notes' element={<Notes />} />
          <Route path='/add' element={<Add />} />
          <Route path='/notes/*' element={<SingleNote />} />
          <Route path='/update/*' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
