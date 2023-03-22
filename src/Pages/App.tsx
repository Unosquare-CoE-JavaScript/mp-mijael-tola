import React from 'react';
import './App.css';
import {Layout} from "../Components/Layouts/Layout";
import {Navbar} from "../Components/Navbar/Navbar";
import {Dropdown} from "../Components/Dropdown/Dropdown";
import {Home} from "./Home/Home";
import {Logo} from "../Components/Logo/Logo";

function App() {
  return (
    <Layout style={{ height: '100vh'}}>
        <Navbar
            title={<Logo/>}
            options={<Dropdown label="Login" name="Login" options={[]}/>}
        />
        <Layout style={{ maxHeight: 'calc(100vh - 100px)'}}>
            <Home/>
        </Layout>
    </Layout>
  );
}

export default App;
