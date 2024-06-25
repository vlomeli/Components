import TeamData from "./about-team-component/TeamData";
import TeamData2 from "./about-team-component2/TeamData2";
import TeamData3 from "./about-team-component3/TeamData3";
import "./about-team-component/AboutTeam.css";
import "./about-team-component2/AboutTeam2.css";
import "./about-team-component3/AboutTeam3.css";
import "./App.css"

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>About the Team</h1>
        </header>
        <main>
          <TeamData />
          <TeamData2 />
          <TeamData3 />
        </main>
      </div>
    </>
  );
}

export default App;
