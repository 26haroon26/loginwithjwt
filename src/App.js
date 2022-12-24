import "./App.css";
import SignIn from "./components/signin";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

let baseUrl = "https://crazy-wrap-frog.cyclic.app";

function App() {
  const Logout = async () => {
    try {
      let response = await axios.post(`${baseUrl}/logout`);

      console.log("logout successful");
    } catch (e) {
      console.log("e: ", e);
    }
  };
  return (
    <div className="App">
      <Router>
        <div className="ForLinks">
          <Link to="/">Sign In</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <a onClick={Logout}>Logout</a>
        </div>
        <Routes>
          <Route index element={<SignIn />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
