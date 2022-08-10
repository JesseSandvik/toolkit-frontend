import { NavLink } from "react-router-dom";


const NavigationLink = ({ routeName, routePath }) => {
  return (
    <NavLink to={routePath}>{routeName}</NavLink>
  );
}

export default NavigationLink;