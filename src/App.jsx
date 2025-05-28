import { useState } from 'react'
import './App.css'
import Header from "./ui/header/header.jsx";
import Sidebar from "./ui/sidebar/sidebar.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import {Route, Routes} from "react-router";
import {NoteMore} from "./components/Note/Notes/note-more.jsx";

function App() {
    const [sidebar, setSidebarToggle] = useState(false);

  return (
    <>
        <Header sidebar={sidebar} setSidebarToggle={setSidebarToggle} />
        <main className="main">
            <Sidebar sidebar={sidebar}/>
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path={`/notes/:id`} element={<NoteMore/>}/>
            </Routes>
        </main>
    </>
  )
}

export default App
