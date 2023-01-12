import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <NavLink to="/task1">
            <li>Task 1</li>
          </NavLink>
          <NavLink to="/task2">
            <li>Task 2</li>
          </NavLink>
          <NavLink to="/task3">
            <li>Task 3</li>
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
