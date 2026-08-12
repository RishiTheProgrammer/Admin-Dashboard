import { Col } from 'react-bootstrap'

const sidebar = ({children, title}) => {
  return (
    <Col lg="auto">
      <h2>{title}</h2>
      {children}
    </Col>
  )
}

export default sidebar