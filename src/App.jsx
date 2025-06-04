import './App.css'
import Banner from "./ui/components/Banner.jsx";
import SideDrawer from "./ui/navigation/SideDrawer.jsx";
import PLanguageSkillsGrid from "./ui/components/PLanguageSkillsGrid.jsx";
import ToolsGrid from "./ui/components/ToolsGrid.jsx";

function App() {


  return (
    <>
        <Banner></Banner>
        <PLanguageSkillsGrid></PLanguageSkillsGrid>
        <ToolsGrid></ToolsGrid>
        <SideDrawer></SideDrawer>
    </>
  )
}

export default App
