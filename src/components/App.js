
import React from "react";
import './../styles/App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";

const App = () => {
  return (
    <BrowserRouter>
    <div>
        {/* Do not remove the main div */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/items/:id' element={<Item1 />}/>
          <Route path='/items/:id' element={<Item2 />}/>
          <Route path='/items/:id' element={<Item3 />}/>
        </Routes>
        
    </div>
    </BrowserRouter>
  )
}

export default App
