import "./Footer.css";
const Footer = () => {
    return (
        <>
            <footer>
                <div class="top">
                    <div class="pages">
                        <ul>
                            <h3>Travel Log</h3>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Catalog</a></li>
                            <li><a href="#">Search</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#ContactUs">Contact</a></li>
                        </ul>

                        <ul>
                            <h3>Careers</h3>
                            <li><a href="#">Apply Online</a></li>
                            <li><a href="#">Available Positions</a></li>
                        </ul>

                        <ul>
                            <h3>About Us</h3>
                            <li><a href="#">Meet Our Team</a></li>
                            <li><a href="#">Our Responsibilities</a></li>
                            <li><a href="#">Our Codes</a></li>
                            <li><a href="#">Our Values</a></li>
                        </ul>
                    </div>
                </div>
                <div class="social">
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-github"></i>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-youtube"></i>
                </div>
                <div class="info">
                    <div class="copyright">2024 Copyright &copy; Travel Log</div>
                </div>
            </footer>
        </>
    )
}

export default Footer;