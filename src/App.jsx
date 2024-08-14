import css from './Components/App.module.css'
import Home from './Components/Home.jsx';
import Counter from './Components/counter.jsx';
import About from './Components/About.jsx';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
function App() {
return  (
  <BrowserRouter>
    <nav className={css.menu}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/counter">Counter</Link>
    </nav>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/counter" Component={Counter} />
    </Routes>
  </BrowserRouter>
);
};
export default App;
