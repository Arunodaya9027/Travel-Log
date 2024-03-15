import "./Header.css";
const Header = ()=>{
    return (
        <div className="nav">
            <div className="nav-logo">
                <h2>Travel Log</h2>
            </div>
            <div className="nav-link">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#user"></a></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;