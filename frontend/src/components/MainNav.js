import {React, useState, useEffect} from "react";
import "./MainNav.css";
import MenuItem from "./MenuItem";
import axios from 'axios';
const MainNav = () => {
    const [profilePic, setProfilePic] = useState("");
    const [session, setSession] = useState();
    const [details, setDetails] = useState();
    const id = "";

    const [isOpen, setIsOpen] = useState(false); // State to control menu visibility 

    const handleClick = () => {
        setIsOpen(!isOpen); // Toggle menu visibility on click
    };

    const searchStyle = {
        // Styles for the search input field (e.g., width, height, padding)

    };

    const searchButtonStyle = {
        // Styles for the search button (e.g., margin, background color)
        marginTop: "2px", 
        height: "60%", 
        backgroundColor: "transparent", 
        border: "none"
    };

    const profileLinks = [
        { title: 'My Profile', link: '/profile' },
        { title: 'Subscription', link: '/subscription' },
        { title: 'My Cards', link: '/cards' },
    ];

    const handleMenuOptionClick = (link) => {
        // Handle potential actions before navigation (optional)
        window.location.href = link; // Redirect to the link
    };

    const loadData = (session) => {
        if (session != null) {
            console.log(session);
            const id = session;
            axios.get(`http://localhost:5000/session/${id}`)
            .then((res) => {
                console.log(res.data);
                setDetails(res.data);
                console.log(details);
                setProfilePic(res.data.profilePic);
                console.log(profilePic);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
    useEffect(() => {
        const retrievedSession = localStorage.getItem('session');
        setSession(retrievedSession || null); // Set default empty string if not found
        loadData(session);
        // localStorage.removeItem('session');
    }, [session])
    
    return (
        <div className="MainNav">
            <a href="/" className="logo">
                <h1 className="logo">Travel Log</h1>
            </a>
            
            <ul className="nav-menu log-nav">
                <li>
                <button className="search" style={searchButtonStyle}>
                    <i className="fa-solid fa-magnifying-glass" style={{color: "white", fontSize: "20px"}}></i>
                </button>
                </li>
                {MenuItem.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cname} href={item.url}>{item.title}</a>
                        </li>
                    )
                })}
                    <li className="pfp">
                        <div className="profile-button" onClick={handleClick}>
                            <img className="dp" src={profilePic} alt="Profile Picture" height="25%" width="25%" />
                        </div>
                    </li>
                
            </ul>
            {/* {isSearchOpen && (
                <div className="search-container">
                <div className="search-input-wrapper">
                    <input type="text" style={searchStyle} placeholder="Search..." onChange={handleSearchChange} />
                    Add a button to clear the search field (optional)
                    <button className="clear-search-button">Clear</button>
                </div>
                Add the search results list here (conditionally rendered based on searchText)
                </div>
            )}

            {isSearchOpen && <div className="search-overlay"></div>} */}
            {isOpen && ( // Conditionally render menu based on isOpen state
                <ul className="profile-dropdown">
                    {profileLinks.map((item, index) => (
                        <li key={index}>
                            <button onClick={() => handleMenuOptionClick(item.link)}>
                                {item.title}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button onClick={() => handleMenuOptionClick('/logout')}>
                            Log Out
                        </button>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default MainNav;