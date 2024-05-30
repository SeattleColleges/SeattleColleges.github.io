import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title> NSC App Development - About </title>
      </Helmet>
      <Navbar />
      <div style={{ minHeight: "calc(100vh - 95px)", height: "1px" }}>
        <div
          style={{
            marginTop: "10vh",
            marginBottom: "10vh",
            marginLeft: "2rem",
            marginRight: "2rem",
            height: "100%",
          }}
        >
          <div
            style={{ fontSize: "48px", marginBottom: "2rem", fontWeight: 600 }}
          >
            About us
          </div>
          <div
            style={{
              ...flexParent,
              height: "100%",
            }}
          >
            <div style={flexChild} className={"col-sm-6"}></div>
            <div
              style={{
                ...flexChild,
                display: "flex",
                justifyContent: "center",
              }}
              className={"col-sm-6"}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

const flexChild = {
  position: "relative",
  width: "100%",
  minHeight: "1px",
  paddingRight: "15px",
  paddingLeft: "15px",
};

const flexParent = {
  display: "flex",
  flexWrap: "wrap",
};

export default About;
