// Navbar.jsx
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  // Active NavLink style
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded-lg shadow-sm transition-all"
      : "text-gray-900 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all font-medium";

  const navItems = (
    <>
      <li>
        <NavLink to="/skills2" className={navLinkStyle}>
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className={navLinkStyle}>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/experience" className={navLinkStyle}>
          Experience
        </NavLink>
      </li>
      <li>
        <NavLink to="/education" className={navLinkStyle}>
          Education
        </NavLink>
      </li>
      <li>
        <NavLink to={'/achivment'} className={navLinkStyle}>
          Achivment
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navLinkStyle}>
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 border-b-2 border-blue-200">
      <div className="navbar bg-[#f1f5f53f] backdrop-blur-md shadow-lg">

        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}
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
              className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-xl"
            >
              {navItems}
            </ul>
          </div>

          {/* Logo */}
          <NavLink
            to="/"
            className="btn btn-ghost text-xl font-bold text-blue-700 hover:text-blue-800"
          >
          Amirhamza
          </NavLink>
        </div>

        {/* Navbar Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-1">
            {navItems}
          </ul>
        </div>

        {/* Navbar End */}
<div className="navbar-end">
  <label className="swap swap-rotate">

    {/* Hidden checkbox */}
    <input
      type="checkbox"
      className="theme-controller"
      value="dark"
    />

    {/* Sun icon (Light mode) */}
    <svg
      className="swap-off fill-current w-6 h-6 text-yellow-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5.64 17l-.71.71a1 1 0 001.41 1.41l.71-.71a1 1 0 00-1.41-1.41zM12 5a1 1 0 011-1h0a1 1 0 01-1 1zm6.36 12.36a1 1 0 00-1.41 0l-.71.71a1 1 0 001.41 1.41l.71-.71a1 1 0 000-1.41zM17 12a1 1 0 011-1h0a1 1 0 01-1 1zm-5 4a4 4 0 110-8 4 4 0 010 8zm7-4a1 1 0 011-1h0a1 1 0 01-1 1zM6 12a1 1 0 011-1h0a1 1 0 01-1 1zM12 19a1 1 0 011-1h0a1 1 0 01-1 1z" />
    </svg>

    {/* Moon icon (Dark mode) */}
    <svg
      className="swap-on fill-current w-6 h-6 text-blue-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M21.64 13a1 1 0 00-1.05-.14A8.05 8.05 0 0111.14 3.41a1 1 0 00-1.32-1.27A10 10 0 1022 14.05a1 1 0 00-.36-1.05z" />
    </svg>

  </label>
</div>


      </div>
    </div>
  );
};

export default Navbar;
