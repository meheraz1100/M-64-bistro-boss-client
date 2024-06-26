import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [ cart ] = useCart()
  console.log(user)

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error));
  }

  const navOptions = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Our Menu</Link></li>
      <li><Link to="/order/salad">Order Food</Link></li>
      {
        // user ? 'true' : 'false'
        // user ? condition ? 'double true' : 'one true' : 'false'
      }
      {
        user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
      }
      {
        user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
      }
      <li className="-mt-2">
        <Link to="dashboard/cart">
        <button className="btn btn-ghost">
        <FaShoppingCart className="mr-2 " />
          <div className="badge badge-secondary">+{cart.length}</div>
        </button>
        </Link>
      </li>
      {
        user ? <>
        {/* <span>{user?.displayName}</span> */}
        <li  onClick={handleLogOut}><Link to={"/"}>Logout</Link></li>
        </> : <><li><Link to="/login">Login</Link></li></>
      }
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                {navOptions}
            </ul>
          </div>
          <div className="text-center tracking-widest">
          <h1 className="btn btn-ghost text-2xl ">Bistro Boss</h1>
          <h1 className="text-white text-xl  uppercase">Restaurant</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
        {user ? <><img className="w-14 rounded-full" title={user.displayName} src={user.photoURL} alt="" /></> : <>
          <a className="btn">Get Started</a>
        </>}
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
