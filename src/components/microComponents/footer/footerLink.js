import { Link } from "react-router-dom";

export function FooterLink(props) {
  return (
    <Link
      style={{ color: "white", textDecoration: "none" }}
      to={"/" + props.name}
    >
      {props.name}
    </Link>
  );
}
