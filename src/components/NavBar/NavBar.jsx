import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/dashboard', name: 'Dashboard', id: 5 }
    ];


    return (
        <nav className="p-5">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true
                        ? <RiCloseFill />
                        : < RiMenu2Fill />
                }

            </div>
            <ul className={` ${open? 'top-16': '-top-60'} 
            duration-1000 md:flex absolute md:static px-5`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}>
                    </Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;