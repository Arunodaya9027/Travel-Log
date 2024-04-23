import "./Footer.css";
import { FaArrowRight } from "react-icons/fa";
const Footer = ()=>{
    return (
        <div className="footer">
            <div className="footer-explore">
                <a href="#explore">Explore <FaArrowRight /></a>
            </div>
        </div>
    )
}

export default Footer;