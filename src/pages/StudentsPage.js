// src/pages/StudentsPage.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, {useEffect, useRef, useState} from "react";
import Student from "../components/Student";
import data from "../students.json";
import {Helmet} from "react-helmet";

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
    // Create a ref to store the array of div references
    const divRefs = useRef([]);
    const [activeProgram, setActiveProgram] = useState(Object.keys(data)[0]);


    useEffect(() => {
        /**
         * Changes the color of the sidebar quarters on the page
         */
        const handleScroll = () => {
            const scrollPosition = window.scrollY || window.pageYOffset;

            // Default to 0
            let index = 0;

            // Finds the index of the offset quarter wrapper the user has scrolled too
            let offsets2 = divRefs.current.map(div => div ? div.offsetTop : 0).sort();
            if (offsets2) {
                for (let i = 0; i < offsets2.length; i++) {
                    if (scrollPosition >= offsets2[i]) {
                        index = i;
                    } else {
                        break; // No need to continue if scrollPosition is less than current div position
                    }
                }
            }

            // Uses the index found to get the name of the quarter wrapper
            setActiveProgram(Object.keys(data)[index])
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <Helmet>
                <title> NSC App Development - Students </title>
            </Helmet>
            <Navbar/>
            <div className={"row"}>
                <div style={{ marginTop: "12vh", position: "relative" }}>
                    <div className={"sticky-div"}>
                        {Object.keys(data).map((key, index) => (
                            <a href={"#"+key} key={key} style={{ textDecoration: "none"}}>
                                <div className={key === activeProgram ? "active-quarter" : "secondary-quarter"} style={{padding: "1rem", paddingLeft: "2rem", paddingRight: "4rem", fontWeight: "bold", marginBottom: "2rem"}}>
                                    {key === activeProgram? <>&bull;</> : <>&nbsp;</>} {key}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="students-flexcolumn">
                    <h1 className="students-flexcolumn__h1">Our Students</h1>
                    <div className={"col-9"}>
                        {students.map((quarter, index) => (
                            <div key={index} ref={el => divRefs.current[index] = el} style={{marginBottom: "6rem"}} id={Object.keys(data)[index]}>
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
