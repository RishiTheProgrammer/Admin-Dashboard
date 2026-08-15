import LandingPage from './pages/LandingPage';
import DashboardLayout from './layout/DashboardLayout'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  

  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/*" element={<DashboardLayout />}/>
    </Routes>
  )
}

export default App