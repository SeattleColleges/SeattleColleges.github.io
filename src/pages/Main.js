import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";
import Portable from '../images/example-portable.png';
import Desktop from '../images/example-desktop.png';

function Main() {
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
      <div className="proj-prev">
        <div className="proj-prev__text">
          <p className="proj-prev__text__heading">
            A Program Providing Real Development Experience
          </p>
          <Link to={'/Portfolio'} className="proj-prev__text__subheading">View our Full Portfolio</Link>
        </div>
        <div className="proj-prev__examples">
          <div className="proj-prev__examples_entry">
            <img  className="proj-prev__examples__photo" alt="example portable web app" src={Portable} />
            <p className="proj-prev__examples_description">portable app name</p>
          </div>
          <div className="proj-prev__examples_entry">
            <img  className="proj-prev__examples__photo" alt="example desktop web app" src={Desktop} />
            <p className="proj-prev__examples_description">desktop website name</p>
          </div>
        </div>
      </div>
      <div className="student-prev">
      </div>
    </div>
  );
}

export default Main;