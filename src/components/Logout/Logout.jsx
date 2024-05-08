import {React, useState, useEffect} from "react";
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from "react-router-dom";

function Logout () {
    const [session, setSession] = useState(null);
    const navigate = useNavigate();

    const logout = async(session) => {
        if(session != null) {
            const id = session;
            const currentDate = moment();
            const formattedDate = currentDate.format('YYYY-MM-DD HH:mm:ss');
            try {
                axios.post(`http://localhost:5000/logout/${id}`, {id: id, endTime: formattedDate})
                .then((response) => {
                    console.log(response.message);
                    localStorage.removeItem("session");
                    navigate("/"); // Redirect to login page after successful logout
                })
                .catch((err) => {
                    console.log("Logout API call failed:", err);
                })
            }
            catch (error) {
                console.error("Error during logout:", error);
                // Handle errors (e.g., network issues, unexpected response)
              }
        }
        
    }

    useEffect(() => {
        const retrievedSession = localStorage.getItem('session');
        setSession(retrievedSession || null); // Set default empty string if not found
        logout(session);
    }, []);
    return (
        <>
            <div></div>
        </>
    )
}

export default Logout;