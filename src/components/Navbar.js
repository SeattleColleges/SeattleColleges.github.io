import {Link} from "react-router-dom";
import NSCADLOGO from '../images/nsc-app-dev-color.png';

const Navbar =()=>{
    return (
        <div className="navbar" style={{"display": "flex", "flexDirection": "row", "height": "10vh", "gap": "1rem", "backgroundColor": "blue"}}>
            <Link to={"/"}><img src={NSCADLOGO} alt="nsc app dev logo" style={{"height": "100%"}} /></Link>
            <Link style={{"color": "white"}}>Contact</Link>
            <Link  style={{"color": "white"}}>About</Link>
            <Link to={"/Portfolio"} style={{"color": "white"}}>Portfolio</Link>
            <Link to={"/Students"} style={{"color": "white"}}>Students</Link>
        </div>
    )
}

export default Navbar;