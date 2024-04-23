import "./NavbarStyle.css";
import MenuItem from "./MenuItem";
const Navbar = () => {

    function handleClick(){
        window.location.href = "/signup";
    }
    return (
        <div className="Navbar">
            <h1 className="logo">Travel Log</h1>

            <ul className="nav-menu">
                {MenuItem.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cname} href={item.url}>{item.title}</a>
                        </li>
                    )
                })}
                <button onClick={handleClick}>Sign Up</button>
            </ul>
        </div>
    )
}

export default Navbar;