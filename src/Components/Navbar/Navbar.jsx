import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col md:flex-row md:justify-between md:items-center py-3 md:py-2  md:px-5 ml-[80px] md:ml-0 shadow-xl rounded-lg ">
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
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#4447ff] underline"
                  : ""
              }
            >
                About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
