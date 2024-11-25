import axios from "axios";
import './App.css'
import React, { useEffect, useState } from "react";

function App() {
  let [id, setId] = useState("");
  const [response, setResponse] = useState({});

  useEffect(() => {
    if (id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <div className="app">
      <div>
        <div className="row header">
          <h2>Getting Random user's data using API</h2>
        </div>
        <div >
          <div >
            <label>Search Users via Id:</label>
            <br />
            <input
              type="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter User ID"
            />
            <br />
          </div>
          <div >
           <p> ID:   {response.id}</p>
          <p>Name:   {response.name}</p>
          <p>Username:   {response.username}</p>
            <p>Email:   
            {response.email}</p>
           
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;