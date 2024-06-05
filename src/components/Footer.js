import { Link } from "react-router-dom";
import { FooterLink } from "./microComponents/footer/footerLink";
import { Separator } from "./microComponents/footer/separator";
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
          gap: "10rem",
          //backgroundColor: "white",
        }}
      >
        <ul style={{ ...footerList }}>
          <h4 style={{ ...footerCategory }}>Navigation</h4>
          <Separator />
          <li>
            <FooterLink name="Contact" />
          </li>
          <li>
            <FooterLink name="About" />
          </li>
          <li>
            <FooterLink name="Students" />
          </li>
          <li>
            <FooterLink name="Portfolio" />
          </li>
        </ul>
        <ul style={{ ...footerList }}>
          <h4 style={{ ...footerCategory }}>category</h4>
          <Separator />
          <li>List item</li>
        </ul>
        <ul style={{ ...footerList }}>
          <h4 style={{ ...footerCategory }}>category</h4>
          <Separator />
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
  color: "white",
};

const footerList = {
  listStyleType: "none",
  fontWeight: 200,
  color: "white",
};

export default Footer;
