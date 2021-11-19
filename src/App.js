import logo from "./logo.svg";
import "./App.css";
import Nav from "./nav";
import LoginForm from "./loginform";

function App() {
  return (
    <div className="App">
      <div id="top">
        <Nav />
        <LoginForm />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
