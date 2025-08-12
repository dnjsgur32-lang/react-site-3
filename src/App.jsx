import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './compo/Layout'
import Login from './compo/Login'
import Home from './compo/Home'
import Work1 from './compo/Work1'
import About from './compo/About'
import "./App.css";

function App() {
  return (
    <>
      <h1>과제방</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/react-site-3/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/react-site-3/login" element={<Login />} />
            <Route path="/react-site-3/work1" element={<Work1 />} />
            <Route path="/react-site-3/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;