import React, { useEffect, useState } from "react";



function Gift() {
    const [users, setUsers] = useState([]);
    useEffect(() => { // Replace with your actual API URL
        fetch("http://localhost:3001/fetchAll/sheller").then((response) => response.json()).then((data) => {
            // Assuming API returns an array of objects like: // [{ firstName: "John", lastName: "Doe" }, { firstName: "Jane", lastName: "Smith" }]
            console.log("Fetched data: ", data["data"]);
            setUsers(data.data);


        }).catch((error) => console.error("Error fetching data:", error));
    }, []);
    useEffect(() => { console.log("user data updated: ", users); }, [users]);
    return (<div>
        <h1>User List</h1>
        <ul>
            {users.map((u, i) => (
                <li key={i}>
                    {u.firstName} {u.lastName}
                </li>
            ))}
        </ul>
        {/* <ul> {users.map((user, index) =>
            (<li key={index}> {user.firstName} {user.lastName} </li>))} </ul>  */}
    </div>);
}

export default Gift;
