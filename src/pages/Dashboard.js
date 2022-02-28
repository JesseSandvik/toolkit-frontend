import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <nav className="item">
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
      <div className="two">
        <div className="item three">
          <h2>Good Evening, Tara!</h2>
        </div>
        <div className="item four"></div>
        <div className="item five"></div>
        <div className="item six"></div>
        <div className="item seven"></div>
        <div className="item eight"></div>
        <div className="item nine"></div>
        <div className="item ten"></div>
      </div>
    </section>
  );
}

export default Dashboard;