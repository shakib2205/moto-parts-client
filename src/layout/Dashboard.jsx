
import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hook/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-sky-400">
                <ul className="menu ">
                    <li>
                        <NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar>Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"> <FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"> <FaAd></FaAd> Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings"> <FaList></FaList> My Bookings</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/parts"> <FaShoppingCart></FaShoppingCart> Spare Parts</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;