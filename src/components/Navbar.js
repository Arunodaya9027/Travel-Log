import {React, useState, useEffect} from "react";
import "./NavbarStyle.css";
import MenuItem from "./MenuItem";
const Navbar = () => {
    // const [isSearchOpen, setIsSearchOpen] = useState(false); // Search visibility state
    // const [searchText, setSearchText] = useState(""); // Search text state
    // const [searchResults, setSearchResults] = useState([]); // Search results state
  
    // function handleClick() {
    //   setIsSearchOpen(!isSearchOpen);
    //   setSearchText(""); // Clear search text on closing
    // }
  
    // function handleSearchChange(event) {
    //   const newText = event.target.value;
    //   setSearchText(newText);
  
    //   // Implement search logic here
    //   // (e.g., call an API with newText or filter local data)
    //   // Update setSearchResults (if applicable)
    //   // Example using a placeholder API call:
    // //   useEffect(() => {
    // //     if (newText) {
    // //       fetch(`https://api.example.com/search?q=${newText}`) // Replace with actual API endpoint
    // //         .then((response) => response.json())
    // //         .then((data) => setSearchResults(data.results))
    // //         .catch((error) => console.error("Error fetching search results:", error));
    // //     } else {
    // //       setSearchResults([]); // Clear results if search text is empty
    // //     }
    // //   }, [newText]); // Run effect only when newText changes
    // }
  
    // // Function to clear the search field (optional)
    // function handleClearSearch() {
    //   setSearchText("");
    //   setSearchResults([]); // Clear results as well
    // }

    function handleClick(){
        window.location.href = "/signup";
    }

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
    
    return (
        <div className="Navbar">
            <a href="/" className="logo">
                <h1 className="logo">Travel Log</h1>
            </a>
            
            <ul className="nav-menu">
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
                    
                <button onClick={handleClick}>Sign Up</button>
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
        </div>
    )
}

export default Navbar;