import React from "react";
import "./App.css"; // Import the custom CSS file
import UserList from "./Components/UserList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>List of Users</h1>
        <UserList />
      </div>
    </div>
  );
}

export default App;
