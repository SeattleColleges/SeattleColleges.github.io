import * as React from 'react';

export function FormComponent(props) {
    return (
        <>
            <input
                placeholder={"Name"}
                style={{
                    ...textBoxFormatting,
                    width: "100%"
                }}
            />
            <input
                placeholder={"Email"}
                style={{
                    ...textBoxFormatting,
                    width: "100%"
                }}
            />
            <input
                placeholder={"Business (Optional)"}
                style={{
                    ...textBoxFormatting,
                    width: "100%",
                }}
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
            />
            <button style={{
                width: "100%",
                padding: ".5rem",
                border: "0px",
                background: "#dff0d8",
                fontSize: "1.4rem",
                fontFamily: '"Inter", sans-serif',
                fontWeight: 300,
            }}>
                Send
            </button>
            <div style={{color: "#3E3E3E", marginTop: "1.2rem"}}>Or contact us by email at
                example@example.com or through our phone number at 2066790394
            </div>
        </>
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