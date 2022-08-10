import NavigationLink from "../atoms/NavigationLink";
import { routes } from "../app/appRoutes";

const navigationList =
  routes.map((route, index) => <li key={index}><NavigationLink routeName={route.name} routePath={route.path}/></li>);

const Navigation = () => {
  return (
    <nav>
      <ul>
        {navigationList}
      </ul>
    </nav>
  );
}

export default Navigation;