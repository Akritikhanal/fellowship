import css from './Components/App.module.css'
import Home from './Components/Home.jsx';
// import Count from './Components/count.jsx';
import About from './Components/About.jsx';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
function App() {
return  (
  <BrowserRouter>
    <nav className={css.menu}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* <Link to="/count">Count</Link> */}
    </nav>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      {/* <Route path="/count" Component={Count} /> */}
    </Routes>
  </BrowserRouter>
);
};
export default App;
