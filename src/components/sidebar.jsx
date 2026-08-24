import { Col } from 'react-bootstrap'
import './sidebar.css'

const Sidebar = ({children}) => {
  return (
    <Col lg="auto" className='rounded-2 d-none d-lg-block sidebar'>
      {children}
    </Col>
  )
}

export default Sidebar