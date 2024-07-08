// src/pages/PortfolioPage.js
import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from "../components/Navbar";
import {flexChild, flexParent} from "./Contact";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import page1 from '../images/projects/pelletier/pelletier.png'
import page2 from '../images/projects/nsc_portfolio/homepage.png'
import page3 from '../images/projects/belindas_closet/home_page_light.png'
import page4 from '../images/projects/nsc_events/home_page_not_signed_in.png'
import {faLink} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";


const projects = [
  {
    title: 'Portfolio Site',
    company: 'North Seattle College',
    status: 'In Development',
    socialMedia: [
      {
        icon: faGithub,
        link: 'https://github.com/SeattleColleges/SeattleColleges.github.io'
      },
      {
        icon: faLink,
        link: 'https://seattlecolleges.github.io/'
      },
    ],
    description: "Our portfolio website, the website you are on, was built by our students in the Bachelor's program for North Seattle College.",
    screenshot: page2
  },
  {
    title: 'Construction and Renovation Site',
    company: 'Pelletier Construction',
    status: 'Complete',
    socialMedia: [
      {
        icon: faGithub,
        link: 'https://github.com/PelletierConstructionGroup/PelletierConstructionGroup.github.io'
      },
      {
        icon: faLink,
        link: 'https://pelletierconstructiongroup.github.io/'
      },
    ],
    description: "Pelletier Construction Group is a company based in the Seattle area specializing in home renovation. In 2023, Pelletier Construction had their website redesigned by bachelor's program students of the North Seattle College.",
    screenshot: page1
  },
  {
    title: 'Belinda\'s Closet',
    company: 'North Seattle College',
    status: 'In Development',
    socialMedia: [
      {
        icon: faGithub,
        link: 'https://github.com/SeattleColleges/belindas-closet-nextjs'
      },
    ],
    description: "Belinda's closet is a store at North Seattle College which allows students to borrow and donate clothes for graduation. With the student built website, students will be able to see which clothes are available online.",
    screenshot: page3
  },
  {
    title: 'North Seattle College Events',
    company: 'North Seattle College',
    status: 'In Development',
    socialMedia: [
      {
        icon: faGithub,
        link: 'https://github.com/SeattleColleges/nsc-events-nextjs'
      },
    ],
    description: "North Seattle College Events (NSC Events) is a student built website that allows all students to view upcoming events occurring at the college, and for administrators to add and manage event announcements through the website.",
    screenshot: page4
  },
];

const PortfolioPage = () => {
  return (
    <div>
      <Helmet>
        <title> NSC App Development - Portfolio </title>
      </Helmet>
      <Navbar />
      <div style={{ minHeight: "calc(100vh - 95px)", height: "1px" }}>
        <div
          style={{ marginTop: "10vh", marginBottom: "10vh", height: "100%" }}
        >
          <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              {" "}
              Portfolio Page
            </h1>
            <div
              style={{
                fontSize: "28px",
                marginBottom: "4rem",
                color: "#858585",
              }}
            >
              Since 2023 we have built a portfolio of student made products...
            </div>
          </div>

          {projects.map((obj, index) => (
            <PortfolioComponent
              key={obj.index}
              company={obj.company}
              status={obj.status}
              screenshot={obj.screenshot}
              description={obj.description}
              title={obj.title}
              socialMedia={obj.socialMedia}
              bgSwitch={index % 2 === 0}
              index={index}
            />
          ))}
          <Footer />
        </div>
      </div>
    </div>
  );
};

function PortfolioComponent(props) {
  return (
    <div
      style={{
        ...flexParent,
        backgroundColor: props.bgSwitch ? "#fff" : "#dff0d8",
        paddingTop: props.index ? "8rem" : "",
        paddingBottom: "8rem",
        flexDirection: !props.bgSwitch ? "row-reverse" : "",
      }}
      className={`${props.bgSwitch ? "ps-sm-2" : "ps-sm-5"} xs-center`}
    >
      <div style={flexChild} className={"col-sm-6"}>
        <img
          src={props.screenshot}
          style={{ width: "100%" }}
          className={"shadow-sm"}
        />
      </div>
      <div
        style={{ ...flexChild, marginTop: "2rem" }}
        className={"col-sm-6 flex-xs-center"}
      >
        <h2 style={{ fontSize: "28px", marginBottom: ".3rem" }}>
          {" "}
          {props.title}{" "}
        </h2>
        <div style={{ color: "#858585", marginBottom: ".75rem" }}>
          {props.company} — {props.status}
        </div>
        <div>
          {props.socialMedia.map((obj, index) => (
            <a
              href={obj.link}
              key={index}
              style={{ textDecoration: "none", color: "#282828" }}
              target={"_blank"}
            >
              <FontAwesomeIcon
                icon={obj.icon}
                style={{ fontSize: "40px", marginRight: "1rem" }}
              />
            </a>
          ))}
        </div>
        <div style={{ marginTop: "2.1rem", fontSize: "24px", width: "75%" }}>
          {props.description}
        </div>
      </div>
    </div>
  );
}


const styles = {
  container: {
    padding: "32px",
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "24px",
  },
};

export default PortfolioPage;
