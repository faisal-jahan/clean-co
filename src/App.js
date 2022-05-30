import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js/Navbar";
import {publicMenu} from "../src/routes/PublicRoutes/PublicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicMenu.map(route=><Route path={route.path} element={<route.Component/>}/>)
          }
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
