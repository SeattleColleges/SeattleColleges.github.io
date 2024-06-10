// src/pages/PortfolioPage.js
import React from "react";
import Project from "../components/Project";

const projects = [
  {
    title: "Project One",
    screenshots: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    about: "This is a brief description of Project One.",
    liveDemo: "https://example.com/project-one",
    github: "https://github.com/user/project-one",
  },
  {
    title: "Project Two",
    screenshots: ["https://via.placeholder.com/150"],
    video: "",
    about: "This is a brief description of Project Two.",
    liveDemo: "https://example.com/project-two",
    github: "https://github.com/user/project-two",
  },
];

const PortfolioPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}> Portfolio Page</h1>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
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
