import React from 'react';
import { useState, useEffect } from 'react';

function HomePage() {
    const [backendData, setBackendData] = useState([{}]);
    useEffect(() => {
        fetch('/api').then(
        response => response.json()
    ).then(
        data => {
            setBackendData(data);
        }
    )
    }, []);
  return (
    <div>
    
    <div>{(typeof backendData.users === 'undefined') ? (<p> LOADING ... </p>) : (backendData.users.map((user,i) => (
        <p key={i}>{user}</p>
    )))
    }</div>
    </div>
  );
}

export default HomePage;
