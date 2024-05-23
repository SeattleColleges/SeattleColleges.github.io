import Navbar from "../components/Navbar";

function Contact() {
    return (
      <>
          <Navbar />
          <div style={{minHeight: "calc(100vh - 95px)", marginTop: "2rem", marginLeft: "2rem", marginRight: "2rem", height: "1px"}}>
              <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  height: "100%"
              }}>
                  <div style={{flexGrow: 1, "-webkit-box-flex": 1, flexBasis: 0, maxWidth: "100%"}}>
                      test
                  </div>
                  <div style={{flexGrow: 1, "-webkit-box-flex": 1, flexBasis: 0, maxWidth: "100%"}}>
                      test
                  </div>
              </div>
          </div>
      </>
    );
  }
  
  export default Contact;