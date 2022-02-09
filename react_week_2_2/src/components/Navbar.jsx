import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return <div className='h-[75px] bg-gray-600 flex space-x-4 justify-center items-center text-white'>
        <NavLink style={({ isActive }) =>
            isActive ? {
                color: "red"
            } : undefined
        }
            to="/">Home</NavLink>
        {/* <Link to="/contact">Contact</Link> */}
        <NavLink
            style={({ isActive }) =>
                isActive ? {
                    color: "red"
                } : undefined
            }
            to="/contact">Contact</NavLink>
    </div>;
}
