import React from "react";
import "./App.css";
import SideBar from "./pages/Components/dashboard/SideBar";
import Layout from "./layout/Layout";
import Main from "./pages/Components/main/Main";
const App = () => {
  return (
    <div className="App">
      <SideBar />
      <Main />
    </div>
  );
};
export default App;
