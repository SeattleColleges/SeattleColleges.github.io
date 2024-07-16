// src/pages/StudentsPage.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, {useEffect, useRef, useState} from "react";
import Student from "../components/Student";
import data from "../students.json";

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
    const [activeProgram, setActiveProgram] = useState(Object.keys(data)[0]);

    // Create a ref to store the array of div references
    const divRefs = useRef([]);
    const [offsets, setOffsets] = useState([]);

    // Function to add a div ref to the divRefs array
    const addToRefs = (el) => {
        if (el && !divRefs.current.includes(el)) {
            divRefs.current.push(el);
        }
    };

    // Finds the offset of all divRefs
    useEffect(() => {
        const newOffsets = divRefs.current
            .map((div) => div ? div.offsetTop : 0)
            .sort((a, b) => a - b);
        setOffsets(newOffsets);
    }, []);


    useEffect(() => {
        /**
         * Scrolls the user to each program section on the page
         */
        const handleScroll = () => {
            // pageYOffset is deprecated, but may be what's compatible in some older browsers
            const scrollPosition = window.scrollY || window.pageYOffset;

            // Default to 0
            let index = 0;

            // Finds the index of the offset quarter wrapper the user has scrolled too
            for (let i = 0; i < offsets.length; i++) {
                if (scrollPosition >= offsets[i]) {
                    index = i;
                } else {
                    break; // No need to continue if scrollPosition is less than current div position
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
