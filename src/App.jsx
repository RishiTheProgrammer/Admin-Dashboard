import { Container, Row } from 'react-bootstrap'
import Sidebar from './components/sidebar'
import MainArea from './components/mainArea'
import Navbar from './components/navbar'
const App = () => {
  return (
    <>
      <Navbar />
    <Container fluid>
      <Row>
        <Sidebar />
        <MainArea />
      </Row>
    </Container>
    </>
  )
}

export default App