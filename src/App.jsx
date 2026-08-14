import { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import MainArea from './components/mainArea'
import Navbar from './components/navbar'
const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark"
  });

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className='vh-100 d-flex flex-column'>
      <Navbar theme={theme} setTheme={setTheme} />
    <Container fluid>
      <Row>
        <MainArea />
      </Row>
    </Container>
    </div>
  )
}

export default App