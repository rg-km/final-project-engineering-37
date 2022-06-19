import React, { createContext, useEffect, useState } from "react"



export default function Profile() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/users`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData.users);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (

        <div >
            <h1>API Posts</h1>
            {loading && <div>A moment please...</div>}
            <ul>
                {data && data.map((id, index) => (
                        <li key={index}>
                            <h3>{id.firstName}</h3>
                        </li>
                    ))}
            </ul>
        </div>
    );
}