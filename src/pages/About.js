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
            North Seattle Application Development
          </div>
          <div>
            <strong>Established in</strong> imperdiet dui accumsan sit amet. Non
            pulvinar neque laoreet suspendisse interdum consectetur libero id
            faucibus. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus.
            In nibh mauris cursus mattis molestie a. Dignissim convallis aenean
            et tortor at risus viverra.
          </div>

          <div>
            <strong>Tellus in hac habitasse</strong> platea dictumst.
            Ullamcorper eget nulla facilisi etiam dignissim. Mauris ultrices
            eros in cursus turpis massa. Cras adipiscing enim eu turpis egestas
            pretium aenean pharetra magna. Est placerat in egestas erat
            imperdiet sed euismod. Faucibus vitae aliquet nec ullamcorper.
          </div>
          <div
            style={{
              ...flexParent,
              height: "100%",
              backgroundColor: "blue",
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
