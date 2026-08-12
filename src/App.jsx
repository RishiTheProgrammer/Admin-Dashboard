import { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Sidebar from './components/sidebar'
import MainArea from './components/mainArea'
import Navbar from './components/navbar'
const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
    <Container fluid>
      <Row>
        <Sidebar />
        <MainArea />
      </Row>
    </Container>
    </div>
  )
}

export default App