import { Link } from "react-router-dom";
import { FooterLink } from "./microComponents/footer/footerLink";
import { Separator } from "./microComponents/footer/separator";
import NSCTREEFROG from "../images/north-seattle-tree-frogs.png";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        display: "flex",
        flexDirection: "row",
        width: "auto",
        height: "120px",
        gap: "5rem",
        backgroundColor: "#165db2",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "auto",
          gap: "10rem",
        }}
      >
        <ul style={{ ...footerList }}>
          <h4 style={{ ...footerCategory }}>Navigation</h4>
          <Separator />
          <ul
            style={{
              ...footerList,
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <li>
              <FooterLink name="Home" />
            </li>
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
        </ul>

        <ul style={{ ...footerList }}>
          <h4 style={{ ...footerCategory }}>Contact Us</h4>
          <Separator />
          <li>email@email.com</li>
        </ul>

        <ul style={{ ...footerList }}>
          <h4 style={{ ...footerCategory }}>Become a student</h4>
          <Separator />
          <li>
            <Link
              to={
                "https://northseattle.edu/programs/application-development/application-development-bachelor-applied-science-bas-degree"
              }
              style={{ textDecoration: "none" }}
            >
              <p style={{ ...footerList }}>Click here to learn how!</p>
            </Link>
          </li>
        </ul>
      </div>

      <Link to={"https://northseattle.edu/"}>
        <img
          src={NSCTREEFROG}
          alt="nsc app dev logo"
          style={{
            width: "11rem",
          }}
        />
      </Link>
    </div>
  );
};

const footerCategory = {
  fontWeight: 600,
  textAlign: "center",
  color: "white",
};

const footerList = {
  listStyleType: "none",
  fontWeight: 200,
  color: "white",
};

export default Footer;
