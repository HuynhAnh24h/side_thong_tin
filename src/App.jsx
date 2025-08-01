import SurvayPage from "./pages/SurvayPage"
import Dashboard from "./pages/Dashboard"
import OverviewCard  from "./pages/OverviewCard"
import {Routes,Route} from "react-router-dom"

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<SurvayPage/>}/>
      <Route path="/thong-ke" element={<Dashboard/>}/>
      <Route path = "/over-view" element={<OverviewCard/>}/>
    </Routes>
  )
}

export default App