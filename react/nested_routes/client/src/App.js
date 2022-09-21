import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  
import Home from "./components/Home";
import User from "./components/User";
import Profile from "./components/Profile";
import Account from "./components/Account";
import NoMatch from "./components/NoMatch";
import './App.css';

function App() {
  return (
    <>
    <h1>React Router</h1>

    <nav>
      <Link to="/home">Home</Link>
      <Link to="/user">User</Link>
    </nav>

    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="user" element={<User />} >
        <Route index element={<Profile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </>
  );
}

export default App;
