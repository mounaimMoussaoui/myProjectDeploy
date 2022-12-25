import Home from '../src/pages/Home';
import Contact from '../src/pages/Contact';
import About from '../src/pages/About';
import Portfolio from '../src/pages/Portfolio';
import './App.css';
// import Layout from './pages/Layout'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {AiOutlineHome, AiOutlineContacts, AiOutlineFundProjectionScreen, AiOutlineUser} from "react-icons/ai";


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/my-project">
        <Routes>
        <nav className="shadow min-h-[100vh] p-2">
            <ul className="nav-bar flex flex-col gap-4">
            <li className="px-4 active">
                  <Route exact path="/my-project" element={<Home />} >
                    <NavLink to="/" className="flex items-center gap-3">
                      <AiOutlineHome className="w-[25px] h-[25px]" />
                      <span className="hidden md:block">Home</span>
                    </NavLink>
                  </Route>
            </li>
            <li className="px-4">
              <Route path="/about" element={<About />} >
                <NavLink to={"/about"} className="flex items-center gap-3 whitespace-nowrap">
                    <AiOutlineUser className="w-[25px] h-[25px]" />
                    <span className="hidden md:block">About Me</span>
                </NavLink>
              </Route>
            </li>
            <li className="px-4">
              <Route path="/contact" element={<Contact />} >
                <NavLink to="/contact" className="flex items-center gap-3">
                    <AiOutlineContacts className="w-[25px] h-[25px]" />
                    <span className="hidden md:block">Contact</span>
                </NavLink>
              </Route>
            </li>
            {/* <li>
                <Link to="/skills" className="flex items-center gap-3">
                    <GiSkills />
                    Skills
                </Link>
            </li> */}
            <li className="px-4">
              <Route path="/portfolio" element={<Portfolio />} >
                <NavLink to="/portfolio" className="flex items-center gap-3">
                    <AiOutlineFundProjectionScreen className="w-[25px] h-[25px]" />
                    <span className="hidden md:block">portfolio</span>
                </NavLink>
              </Route>
            </li>
            </ul>
        </nav>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
