import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="item sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/appointments">Appointments</NavLink>
          </li>
          <li>
            <NavLink to="/kits">Kits</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;