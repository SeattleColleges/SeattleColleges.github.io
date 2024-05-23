import Navbar from "../components/Navbar";
import {Helmet} from "react-helmet";

function Contact() {
    return (
      <>
          <Helmet>
              <title> NSC App Development - Contact </title>
          </Helmet>
          <Navbar />
          <div style={{minHeight: "calc(100vh - 95px)", marginTop: "2rem", marginLeft: "2rem", marginRight: "2rem", height: "1px"}}>
              <div style={{fontSize: "48px", marginBottom: "2rem", fontWeight: 600}}>
                  Contact us
              </div>
              <div style={{
                  ...flexParent,
                  height: "100%"
              }}>
                  <div style={flexChild}>
                      <input
                          placeholder={"Name"}
                          style={{
                              ...textBoxFormatting,
                              width: "100%"
                          }}
                      />
                      <div style={{...flexParent, gap: "1rem"}}>
                          <input
                              placeholder={"Email"}
                              style={{
                                  ...textBoxFormatting,
                                  ...flexChild
                              }}
                          />
                          <input
                              placeholder={"Business (Optional)"}
                              style={{
                                  ...textBoxFormatting,
                                  ...flexChild
                              }}
                          />
                      </div>
                      <textarea
                          placeholder={"Message"}
                          style={{
                              ...textBoxFormatting,
                              width: "100%",
                              height: "100px",
                              resize: "none",
                              textIndent: "10px"
                        }}
                      />
                      <button style={{
                          width: "100%",
                          padding: ".5rem",
                          border: "0px",
                          background: "#D9D9D9",
                          fontSize: "1.4rem",
                          fontFamily: '"Inter", sans-serif',
                          fontWeight: 300,
                      }}>
                          Send
                      </button>
                      <div style={{color: "#3E3E3E", marginTop: "1.2rem"}}>Or contact us by email at example@example.com or through our phone number at 2066790394</div>
                  </div>
                  <div style={flexChild}>
                      test
                  </div>
              </div>
          </div>
      </>
    );
  }

  const textBoxFormatting = {
      fontSize: "1.1rem",
      fontFamily: '"Inter", sans-serif',
      border: "#D4D4D4 solid 1px",
      marginBottom: "1rem",
      padding: ".5rem",
      fontWeight: 300,
  };

 const flexChild = {
     flexGrow: 1,
     "-webkit-box-flex": 1,
     flexBasis: 0,
     maxWidth: "100%"
 }

 const flexParent = {
     display: "flex",
     flexWrap: "wrap",
 }

  export default Contact;