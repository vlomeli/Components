import React from "react";
import TeamData from "./about-team-component/TeamData";
import "./about-team-component/AboutTeam.css";

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Company</h1>
      </header>
      <main>
        <TeamData />
      </main>
    </div>
    </>
  );
}

export default App;
