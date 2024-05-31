import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import NSC_Marquee from "../images/about/NSC_Marquee.jpg";

function About() {
  return (
    <>
      <Helmet>
        <title> NSC App Development - About </title>
      </Helmet>
      <Navbar />

      <div
        style={{
          marginTop: "10vh",
          marginBottom: "10vh",
          height: "100%",
        }}
      >
        <div
          style={{
            ...flexParent,
            height: "auto",
          }}
        >
          <div
            style={{
              ...flexChild,
              display: "flex",
              justifyContent: "center",
              paddingTop: "30px",
              width: "30%",
            }}
          >
            <div
              style={{
                width: "70%",
                fontSize: "56px",
                fontWeight: 600,
              }}
            >
              North Seattle Application Development
            </div>
          </div>
          <div
            style={{
              ...flexChild,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
            }}
          >
            <div
              style={{
                ...flexChild,
                fontSize: "24px",
                width: "80%",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>
                <strong>Established in</strong> imperdiet dui accumsan sit amet.
                Non pulvinar neque laoreet suspendisse interdum consectetur
                libero id faucibus. Vehicula ipsum a arcu cursus vitae congue
                mauris rhoncus. In nibh mauris cursus mattis molestie a.
                Dignissim convallis aenean et tortor at risus viverra.
              </div>

              <div>
                <strong>Tellus in hac habitasse</strong> platea dictumst.
                Ullamcorper eget nulla facilisi etiam dignissim. Mauris ultrices
                eros in cursus turpis massa. Cras adipiscing enim eu turpis
                egestas pretium aenean pharetra magna. Est placerat in egestas
                erat imperdiet sed euismod. Faucibus vitae aliquet nec
                ullamcorper.
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={NSC_Marquee}
        alt="North Seattle College"
        style={{
          display: "block",
        }}
      />
      <div
        style={{
          backgroundColor: "#165db2",
          height: "190px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "gray",
        }}
      >
        Placeholder Footer
      </div>
    </>
  );
}

const flexChild = {
  position: "relative",
  minHeight: "1px",
  paddingRight: "15px",
  paddingLeft: "15px",
};

const flexParent = {
  display: "flex",
  flexWrap: "wrap",
};

export default About;
