
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Services from "../pages/Services/Services";

export const publicRoute = [
  {path:"/",name:"Home",Component:Home},
  {path:"/about",name:"About",Component:About},
  {path:"/services",name:"Services",Component:Services},
  {path:"/contact",name:"Contact",Component:Contact},
  {path:"/login",name:"Login",Component:Login}
];

