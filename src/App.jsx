import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from './compo/Layout'
import Login from './compo/Login'
import Home from './compo/Home'

function App() {
  return (
    <>
      <h1>과제방</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/react-site-3/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/react-site-3/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;