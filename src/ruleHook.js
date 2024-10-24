import React from "react";

function ruleHook() {
    const [user, setUser] = React.useState([]);

    const fecthData = () => {
        fetch("https://randomuser.me/api/?results=1").then(response => response.json()).then(data => setUser(data));
    }

    React.useEffect(() => {
        fecthData();
    }, []);

    return Object.keys(user).length > 0 ? (
        <div>
            <h1>Data Returned</h1>
            <h2>First Name: {user.results[0].name.first}</h2>
            <h2>Last Name: {user.results[0].name.last}</h2>
        </div>
    ) : (
        <h1>Data pending...</h1>
    );
}