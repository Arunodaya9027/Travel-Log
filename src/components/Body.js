import "./Body.css";
const Body = () => {
    return (
        <div className="hero">
            <h1>Let's Explore the World <br/>with <span>Travel Log</span></h1>
            <br />
            <form class="example" action="/action_page.php">
                <input type="text" placeholder="Enter your destination..." name="search" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Body;