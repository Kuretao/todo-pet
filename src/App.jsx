import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header/header.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";

function App() {
    const [sidebar, setSidebarToggle] = useState(false);

  return (
    <>
        <Header sidebar={sidebar} setSidebarToggle={setSidebarToggle} />
        <Sidebar sidebar={sidebar}/>
    </>
  )
}

export default App
