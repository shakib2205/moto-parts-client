import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../hook/useCart";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const nabOption = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/parts">Spare Parts</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
        <li><Link to="/shipment">Shipment</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li>
            <Link to='/dashboard/cart'>
                
                    <FaShoppingCart></FaShoppingCart>
                    <div>+{cart.length}</div>
                
            </Link>
        </li>


        {
            user ? <>
                {/* <span>{user.displayName}</span> */}
                <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {nabOption}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className="w-28" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nabOption}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;