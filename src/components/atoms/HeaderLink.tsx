import { NavLink } from "react-router-dom";

// HeaderのLinkコンポーネント
const HeaderLink = ({
  linkTo,
  children,
}: {
  linkTo: string;
  children: string;
}) => {
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
