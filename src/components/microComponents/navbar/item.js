import * as React from 'react';
import {Link} from "react-router-dom";

export function Item(props) {
    return <Link style={{color: "white", textDecoration: "none", fontSize: "1.3rem", fontWeight: "600"}} to={"/"+props.name}>{props.name}</Link>
}