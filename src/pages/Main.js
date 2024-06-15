import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import belindas from '../images/belindasmobile.png';
import pelletier from '../images/pelletier.png';
import StudentThumbnail from "../components/StudentThumbnail";
import studentData from "../students.json";
import { Helmet } from "react-helmet";
import { FormComponent } from "../components/microComponents/contact/form";
import Footer from "../components/Footer";

const studentDatafiltered = studentData.students.filter(
  (item) => item.photo !== "anon-profile-image.png"
);
const studentDataSlice = studentDatafiltered.slice(0, 16);

function Main() {
  console.log(studentDatafiltered.length);
  return (
    <>
      <Helmet>
        <title> NSC App Development </title>
      </Helmet>
      <Navbar />
      <div className="homepage-content">
        <div className="hero__wrapper">
          <div className="hero">
            <div className="hero__text">
              <h1 className="hero__text__heading">
                North Seattle Application Development
              </h1>
              <p className="hero__text__subheading">
                Preparing students for immediate employment in a high-demand field
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-div">
        <div className="portfolio-div__flexcol">
          <p className="portfolio-div__flexcol__heading">
            A Program Providing Real Development Experience
          </p>
          <Link to={"/Portfolio"} className="portfolio-div__flexcol__link">
            View our Full Portfolio
          </Link>
        </div>
        <div className="portfolio-div__examples">
          <div className="portfolio-div__examples_entry">
            <img
              className="portfolio-div__examples__photo"
              alt="example portable web app"
              src={belindas}
            />
            <p className="portfolio-div__examples_description">
              Belinda's Closet
            </p>
          </div>
          <div className="portfolio-div__examples_entry">
            <img
              className="portfolio-div__examples__photo"
              alt="example desktop web app"
              src={pelletier}
            />
            <p className="portfolio-div__examples_description">
              Pelletier Construction
            </p>
          </div>
        </div>
      </div>
      <div className="student-prev">
        <div className="student-prev__gallery">
          <div className="student-prev__gallery__grid">
            {studentDataSlice.map((student, index) => (
              <StudentThumbnail
                fileName={student.photo}
                studentName={student.name}
              />
            ))}
          </div>
          <Link className="student-prev__gallery__link" to={"/Students"}>
            Get to know our student developers
          </Link>
        </div>
        <p className="student-prev__quote">
          "This was the best investment I could have made due to the confidence and experience gained through the program." - Nick Ramirez
        </p>
      </div>
      <div className="contact-div">
        <div className="contact-div__contact-wrapper">
          <p className="contact-div__p-title">
            Looking for Help on Your Next Big Project?
          </p>
          <FormComponent />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10741.007374849207!2d-122.3326717!3d47.6989479!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490140175955555%3A0x59c4d51ad68ba97!2sNorth%20Seattle%20College!5e0!3m2!1spt-PT!2sus!4v1716602425904!5m2!1spt-PT!2sus"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          id={"contact-page-map"}
          title="mainpagemap"
          className="contact-div__iframe"
        />
      </div>
      <Footer />
    </>
  );
}

export default Main;
