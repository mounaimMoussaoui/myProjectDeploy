// import { Outlet,  NavLink } from "react-router-dom";
// import {AiOutlineHome, AiOutlineContacts, AiOutlineFundProjectionScreen, AiOutlineUser} from "react-icons/ai";
// // import {GiSkills} from "react-icons/gi";
// import "./style/navBar.css"

// const Layout = () => {
//     return (
//         <>
//         <nav className="shadow min-h-[100vh] p-2">
//             <ul className="nav-bar flex flex-col gap-4">
//             <li className="px-4 active">
//                 <NavLink to="/" className="flex items-center gap-3">
//                     <AiOutlineHome className="w-[25px] h-[25px]" />
//                     <span className="hidden md:block">Home</span>
//                 </NavLink>
//             </li>
//             <li className="px-4">
//                 <NavLink to={"/about"} className="flex items-center gap-3 whitespace-nowrap">
//                     <AiOutlineUser className="w-[25px] h-[25px]" />
//                     <span className="hidden md:block">About Me</span>
//                 </NavLink>
//             </li>
//             <li className="px-4">
//                 <NavLink to="/contact" className="flex items-center gap-3">
//                     <AiOutlineContacts className="w-[25px] h-[25px]" />
//                     <span className="hidden md:block">Contact</span>
//                 </NavLink>
//             </li>
//             {/* <li>
//                 <Link to="/skills" className="flex items-center gap-3">
//                     <GiSkills />
//                     Skills
//                 </Link>
//             </li> */}
//             <li className="px-4">
//                 <NavLink to="/portfolio" className="flex items-center gap-3">
//                     <AiOutlineFundProjectionScreen className="w-[25px] h-[25px]" />
//                     <span className="hidden md:block">portfolio</span>
//                 </NavLink>
//             </li>
//             </ul>
//         </nav>

//         <Outlet />
//         </>
//     )
// };

// export default Layout;