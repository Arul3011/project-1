import { useState } from "react";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import ProRoute from "./proctedRout/ProRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Buy from "./componentes/Buy";
import Sell from "./componentes/Sell";
import DataContext from "./dataContext/DataContext";
import { DataProvider } from "../src/dataContext/DataContext";
import Profile from "./componentes/Profile";
import Blog from "./componentes/Blog";
function App() {
  // const [count, setCount] = useState(0);
  const [state, setState] = useState(true);
  return (
    <>
      <DataProvider>
        <Routes>
          <Route element={<ProRoute />}>
            <Route path="/sell" element={<Sell />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Signup />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/blog" element={Blog} /> */}
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
