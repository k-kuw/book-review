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
      style={({ isActive }) => (isActive ? { color: "brown" } : {})}
      className="underline"
    >
      {children}
    </NavLink>
  );
};

export default HeaderLink;
