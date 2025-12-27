import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <NavLink className="nav-link text-success" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link text-success" to="/package">
        Pacakge List
      </NavLink>
      <NavLink className="nav-link text-success" to="/search">
        Search Student
      </NavLink>
    </nav>
  );
}
