import { NavLink } from "react-router-dom";
import './landingPage.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <Container fluid id='landingPage'>
      <Row className='min-vh-100 align-items-center'>
        <Col className='ps-lg-5' xs={12} lg={6}>
          <Card className='bg-transparent border-0 text-white ps-lg-5 text-center text-lg-start'>
            <Card.Body>
              <Card.Title>
                <h1 className='display-4 fw-semibold'>Build. Manage. <br /> Scale. Effortlessly.</h1>
              </Card.Title>
              <Card.Text className='text-secondary fw-semibold fs-5'>DevDash is a modern dashboard template for developers and teams. Save time, ship faster and focus on what matters most.</Card.Text>
              <NavLink to="/home" className='btn px-4 py-3 btn-get-started'>Get Started <FaArrowRight className='btn-arrow'/></NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col className='pe-lg-5 text-center' xs={12} lg={6}>
            <img src="https://picsum.photos/400" className="rounded-5 hero-img img-fluid"/>
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPage