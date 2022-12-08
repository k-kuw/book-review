import { NavLink } from "react-router-dom";

const HeaderLink = ({linkTo, children}: any) => {
  return (
    <NavLink
      to={linkTo}
      style={({ isActive }) => (isActive ? { color: "red" } : {})}
    >
      {children}
    </NavLink>
  );
};

export default HeaderLink;
