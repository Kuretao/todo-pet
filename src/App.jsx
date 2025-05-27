import { useState } from 'react'
import './App.css'
import Header from "./components/header/header.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";

function App() {
    const [sidebar, setSidebarToggle] = useState(false);

  return (
    <>
        <Header sidebar={sidebar} setSidebarToggle={setSidebarToggle} />
        <main className="main">
            <Sidebar sidebar={sidebar}/>
            <MainContent/>
        </main>
    </>
  )
}

export default App
