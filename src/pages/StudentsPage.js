// src/pages/StudentsPage.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import Student from "../components/Student";
import data from "../students.json";

// const students = [
//   {
//     name: "Alice Johnson",
//     photo: "anon-profile-image.png",
//     about: "Alice is a computer science major with a passion for AI.",
//     email: "alice@example.com",
//     github: "https://github.com/alice",
//     linkedin: "https://linkedin.com/in/alice",
//   },
//   {
//     name: "Bob Smith",
//     photo: "Bennett-Fife.png",
//     about: "Bob is a software engineer who loves open source projects.",
//     email: "bob@example.com",
//     github: "https://github.com/bob",
//     linkedin: "https://linkedin.com/in/bob",
//   },
// ];

// Per quarter, sort by people who've volunteered for more time-consuming roles, then those with a picture and description, then those with neither
const students = Object.values(Object.fromEntries(
    Object.entries(data).map(([key, students]) => [key, students
        .filter(student => student.role !== "Developer")
        .concat(
            students.filter(student => student.role === "Developer" && student.photo !== "anon-profile-image.png")
        ).concat(
            students.filter(student => student.role === "Developer" && student.photo === "anon-profile-image.png" && student.about !== "")
        ).concat(
            students.filter(student => student.role === "Developer" && student.photo === "anon-profile-image.png" && student.about === "")
        )
    ])
));

const StudentsPage = () => {
    return (
        <div>
            <Navbar/>
            <div className={"row"}>
                <div style={{ marginTop: "12vh", position: "relative" }}>
                    <div className={"sticky-div"}>
                        {Object.keys(data).map((key) => (
                            <a href={"#"+key} key={key} style={{ textDecoration: "none", color: "black" }}>
                                <div style={{backgroundColor: "#95CA59", padding: "1rem", paddingLeft: "2rem", paddingRight: "4rem", fontWeight: "bold"}}>
                                    &bull; {key}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="students-flexcolumn">
                    <h1 className="students-flexcolumn__h1">Our Students</h1>
                    <div className={"col-9"}>
                        {students.map((quarter, index) => (
                            <div key={index} style={{marginBottom: "3rem"}} id={Object.keys(data)[index]}>
                                {quarter.map((student, index) => (
                                    <Student key={index} {...student} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

const styles = {
    container: {
        padding: "32px",
        backgroundColor: "#f9f9f9",
    },
    header: {
        fontSize: "2rem",
        marginBottom: "24px",
        textAlign: "center",
    },
};

export default StudentsPage;
