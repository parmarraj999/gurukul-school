import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Nav from "./layouts/nav/nav";
import Home from "./layouts/home/home";

function App() {

  return (
    <div className="App">
     <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
