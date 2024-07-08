import * as React from 'react';
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

export function FormComponent(props) {
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        setLoading(true)
        e.preventDefault();
        console.log(form.current)

        emailjs.sendForm('service_v2z2ezq', 'template_m0u904m', form.current, {
                publicKey: 'OVBPyEMHCDEfZiFuo',
        }).then(
            () => {
                console.log('SUCCESS!');
                e.target.reset();
                setLoading(false);
            },
            (error) => {
                console.log('FAILED...', error.text);
                setLoading(false);
            },
        );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input
                placeholder={"Name"}
                style={{
                    ...textBoxFormatting,
                    width: "100%"
                }}
                disabled={loading}
                name={"from_name"}
            />
            <input
                placeholder={"Email"}
                style={{
                    ...textBoxFormatting,
                    width: "100%"
                }}
                disabled={loading}
                name={"reply_to"}
            />
            <input
                placeholder={"Business (Optional)"}
                style={{
                    ...textBoxFormatting,
                    width: "100%",
                }}
                disabled={loading}
                name={"user_business"}
            />
            <textarea
                placeholder={"Message"}
                style={{
                    ...textBoxFormatting,
                    width: "100%",
                    height: "150px",
                    resize: "none",
                    textIndent: "10px"
                }}
                name={"message"}
                disabled={loading}
            />
            <button
                type={"submit"}
                style={{
                    width: "100%",
                    padding: ".5rem",
                    border: "0px",
                    background: "#dff0d8",
                    fontSize: "1.4rem",
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 300,
                }}
                disabled={loading}
                className="contact-button"
            >
                { loading ? "Sending"  : "Send" }
            </button>
            <div style={{color: "#3E3E3E", marginTop: "1.2rem"}}>Or contact us by email at
                northseattle.appdev@gmail.com or through our phone number at []
            </div>
        </form>
    );
};

const textBoxFormatting = {
    fontSize: "1.1rem",
    fontFamily: '"Inter", sans-serif',
    border: "#004da8 solid 2px",
    marginBottom: "1rem",
    padding: ".5rem",
    fontWeight: 300,
};