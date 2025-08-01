import SurvayPage from "./pages/SurvayPage"
import Dashboard from "./pages/Dashboard"
import {Routes,Route} from "react-router-dom"

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<SurvayPage/>}/>
      <Route path="/thong-ke" element={<Dashboard/>}/>
    </Routes>
  )
}

export default App