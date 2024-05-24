import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaCalendarDays, FaShop } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineContactMail, MdOutlineRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
    const [ cart ] = useCart()
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li>
                        <NavLink to={"dashboard/userHome"}>
                            <FaHome />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"dashboard/reservation"}>
                            <FaCalendar />
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"dashboard/paymentHistory"}>
                            <GiWallet />
                            Payment history
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"dashboard/cart"}>
                            <FaShoppingCart />
                            My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"dashboard/review"}>
                            <MdOutlineRateReview />
                            Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"dashboard/myBooking"}>
                        <FaCalendarDays />
                            My Booking
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to={"/"}>
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                        <IoMenuSharp />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <FaShop />
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                        <MdOutlineContactMail />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;