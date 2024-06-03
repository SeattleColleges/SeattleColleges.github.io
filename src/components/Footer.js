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
        gap: "20rem",
        backgroundColor: "#165db2",
        alignItems: "center",
        justifyContent: "space-around",
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "5rem",
          backgroundColor: "white",
        }}
      >
        <ul style={{ ...footerList }}>
          <div style={{ ...footerCategory }}>Navigation</div>
          <li>Contact</li>
          <li>About</li>
          <li>Students</li>
          <li>Portfolio</li>
        </ul>
        <ul style={{ ...footerList }}>
          <div style={{ ...footerCategory }}>category</div>
          <li>List item</li>
        </ul>
        <ul style={{ ...footerList }}>
          <div style={{ ...footerCategory }}>category</div>
          <li>List item</li>
        </ul>
      </div>
      <div
        style={{
          backgroundColor: "green",
        }}
      >
        Text
      </div>
    </div>
  );
};

const footerCategory = {
  fontWeight: 600,
};

const footerList = {
  listStyleType: "none",
};

export default Footer;
