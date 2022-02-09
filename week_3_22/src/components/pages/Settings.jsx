import { NavLink, Outlet } from "react-router-dom";

export default function Settings() {
    return <>
        <div className="bg-red-400 mt-5 h-[75px] flex justify-center items-center space-x-3">
            <NavLink to="/settings/">Profile</NavLink>
            <NavLink to="/settings/account">Account Billings</NavLink>
            <NavLink to="/settings/privacy">Privacy</NavLink>
        </div>

        <div className="py-10">
            <div>
                <Outlet />
            </div>
        </div>
    </>
}
