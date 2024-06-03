import { Link } from "react-router-dom";
import NSCADLOGO from "../images/nsc-app-dev-color.png";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        display: "flex",
        flexDirection: "row",
        height: "180px",
        gap: "1rem",
        backgroundColor: "#165db2",
        alignItems: "center",
      }}
    >
      <Link to={"/"}>
        <img
          src={NSCADLOGO}
          alt="nsc app dev logo"
          style={{
            width: "3rem",
            height: "3rem",
            marginLeft: "1rem",
            marginRight: ".5rem",
          }}
        />
      </Link>
    </div>
  );
};

export default Footer;
