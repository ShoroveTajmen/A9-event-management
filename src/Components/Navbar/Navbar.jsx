import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <nav className="flex flex-col md:flex-row md:justify-between md:items-center py-3 md:py-2  md:px-5 ml-[80px] md:ml-0 shadow-xl rounded-lg  ">
        <Logo></Logo>

        <ul className="flex gap-10 font-bold text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#4447ff] underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="w-[170px] mx-auto">
            <NavLink
              to="/ticket"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#4447ff] underline"
                  : ""
              }
            >
              Buy Ticket
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/speakers"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#4447ff] underline"
                  : ""
              }
            >
              Speakers
            </NavLink>
          </li>
 
          {/* avatar part  */}
          <div className="navbar-end">
            {user?.email ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button className="btn btn-sm  btn-ghost">
                      {user.displayName}
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-sm  btn-primary" onClick={logOut}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm  btn-primary">Login</button>
              </Link>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
