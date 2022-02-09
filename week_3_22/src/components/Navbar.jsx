import { NavLink } from "react-router-dom";

export default function Navbar() {
    return <div className="bg-yellow-400 h-[75px] flex justify-center items-center space-x-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/settings">Settings</NavLink>
    </div>;
}
