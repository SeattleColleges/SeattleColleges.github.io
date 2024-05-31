import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";
import Portable from '../images/example-portable.png';
import Desktop from '../images/example-desktop.png';
import StudentThumbnail from "../components/StudentThumbnail";
import studentData from '../students.json'
import { FormComponent } from "../components/microComponents/contact/form";

const studentDatafiltered = studentData.students.filter((item)=>item.photo!=="anon-profile-image.png");
const studentDataSlice = studentDatafiltered.slice(0,16); 

function Main() {
  console.log(studentDatafiltered.length)
  return (
    <div>
      <Navbar />
      <div className="homepage-content">
        <div className="hero__wrapper">
          <div className="hero">
            <div className="hero__text">
              <h1 className="hero__text__heading">North Seattle Application Development</h1>
              <p className="hero__text__subheading">Integer lacinia, mi quis laoreet ornare, nibh magna eleifend arcu.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-div">
        <div className="portfolio-div__flexcol">
          <p className="portfolio-div__flexcol__heading">
            A Program Providing Real Development Experience
          </p>
          <Link to={'/Portfolio'} className="portfolio-div__flexcol__link">View our Full Portfolio</Link>
        </div>
        <div className="portfolio-div__examples">
          <div className="portfolio-div__examples_entry">
            <img  className="portfolio-div__examples__photo" alt="example portable web app" src={Portable} />
            <p className="portfolio-div__examples_description">portable app name</p>
          </div>
          <div className="portfolio-div__examples_entry">
            <img  className="portfolio-div__examples__photo" alt="example desktop web app" src={Desktop} />
            <p className="portfolio-div__examples_description">desktop website name</p>
          </div>
        </div>
      </div>
      <div className="student-prev">
        <div className="student-prev__gallery">
          <div className="student-prev__gallery__grid">
            {
              studentDataSlice.map((student, index)=>(
                <StudentThumbnail fileName={student.photo} studentName={student.name} />
              ))
            }
          </div>
          <Link className="student-prev__gallery__link" to={"/Students"}>Get to know our student developers</Link>
        </div>
          <p className="student-prev__quote">"The Quick Brown Fox Jumps Over the Lazy Dog" -Someone Somewhere</p>
      </div>
      <div className="contact-div">
            <FormComponent />
      </div>
    </div>
  );
}

export default Main;