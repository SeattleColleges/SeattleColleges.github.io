import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import { FormComponent } from "../components/microComponents/contact/form";
// import {useState} from "react";
// Commented out for now since useState is not being used

function Contact() {
  return (
    <>
      <Helmet>
        <title> NSC App Development - Contact </title>
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
            style={{
              fontSize: "48px",
              marginBottom: "2rem",
              fontWeight: 600,
            }}
          >
            Contact us
          </div>
          <div
            style={{
              ...flexParent,
              height: "100%",
            }}
          >
            <div style={flexChild} className={"col-sm-6"}>
              <FormComponent />
            </div>
            <div
              style={{
                ...flexChild,
                display: "flex",
                justifyContent: "center",
              }}
              className={"col-sm-6"}
            >
              <iframe
                title="contact-page-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10741.007374849207!2d-122.3326717!3d47.6989479!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490140175955555%3A0x59c4d51ad68ba97!2sNorth%20Seattle%20College!5e0!3m2!1spt-PT!2sus!4v1716602425904!5m2!1spt-PT!2sus"
                width="80%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                style={{ border: "none" }}
                referrerPolicy="no-referrer-when-downgrade"
                id={"contact-page-map"}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
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

export default Contact;
