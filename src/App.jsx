import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./ui/pages/MainPage.jsx";
import ProjectsPage from "./ui/pages/ProjectsPage.jsx";
import ScrollToTop from "./mui-helpers/ScrollToTop.js";

function App() {


  return (
    <>
        <BrowserRouter>
            <ScrollToTop></ScrollToTop>
            <Routes>
                <Route path="/" element={<MainPage/>}></Route>
                <Route path="/projects" element={<ProjectsPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
