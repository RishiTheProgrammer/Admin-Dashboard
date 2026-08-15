import { Col } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../sections/LandingPage'
import Home from '../sections/Home'
import Analytics from '../sections/Analytics'
import Messages from '../sections/Messages'
import Settings from '../sections/Settings'
import Profile from '../sections/Profile'

const MainArea = () => {
  return (
    <Col className='overflow-y-auto flex-grow-1' style={{marginTop: "90px"}}>
        <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </Col>
  )
}

export default MainArea