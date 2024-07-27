import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Nav from "./layouts/nav/nav";
import Home from "./layouts/home/home";
import Loader from "./layouts/loader/loader";
import { useEffect, useState } from "react";
import Gallary from "./layouts/gallary/gallary";
import Dashboard from "./admin/dashboard";
import AllImage from "./admin/gallary/all-image";

function App() {

  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  })
 
  return (
    <div className={loading ? "App scroll-none" : "App"}>
      <Loader />
      <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/gallary" element={<Gallary/>}/>
            <Route path="/admin" element={<Dashboard/>} >
              <Route path="allImage" element={<AllImage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
