import { useState } from 'react'
import './App.css'
import Header from "./components/header/header.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Welcome from "./components/welcome/welcome.jsx";

function App() {
    const [sidebar, setSidebarToggle] = useState(false);

  return (
    <>
        <Header sidebar={sidebar} setSidebarToggle={setSidebarToggle} />
        <main className="main">
            <Sidebar sidebar={sidebar}/>
            <Welcome/>
        </main>
    </>
  )
}

export default App
