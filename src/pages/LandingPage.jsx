import { NavLink } from "react-router-dom";
import './landingPage.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa6";
import heroImg from '../assets/HeroImg.png'
import Vector from '../assets/Vector.svg'
import StatCard from "../components/StatCard";
import { BiDevices, BiRocket } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";

const LandingPage = () => {
  return (
    <Container fluid id='landingPage' className='overflow-x-hidden p-0'>
      <Row className='min-vh-100 align-items-center'>
        <Col className='ps-xl-5' xs={12} lg={6}>
          <Card className='bg-transparent border-0 text-white ps-xl-5 text-center text-lg-start'>
            <Card.Body>
              <Card.Title>
                <h1 className='display-4 fw-semibold'>Build. Manage. <br /> Scale. Effortlessly.</h1>
              </Card.Title>
              <Card.Text className='text-secondary fw-semibold fs-5'>DevDash is a modern dashboard template for developers and teams. Save time, ship faster and focus on what matters most.</Card.Text>
              <NavLink to="/home" className='btn px-4 py-3 btn-get-started'>Get Started <FaArrowRight className='btn-arrow'/></NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col className='pe-xl-5 text-center' xs={12} lg={6}>
            <img src={heroImg} className="rounded-5 hero-img img-fluid"/>
        </Col>
        <img src={Vector} className="img-fluid hero-vector" />
      </Row>
      <Row className='min-vh-100 text-white justify-content-evenly px-4 align-items-center'>
        <h1 className="text-center mb-5">All you need in <span className='text-primary'>One Place</span></h1>
        <Col xs={12} md={6} lg={3} className='mt-3 mt-lg-0'>
          <StatCard icon={<BiRocket size={50} className='bg-primary p-2 rounded-circle mb-3'/>} title="Light Fast" description="Built with modern lightweight technologies to save your time."/>
        </Col>
        <Col xs={12} md={6} lg={3} className='mt-3 mt-lg-0'>
          <StatCard icon={<BiDevices size={50} className='bg-success p-2 rounded-circle mb-3'/>} title="Fully Responsive" description="Looks perfect in any device. Mobile, Tablet, Laptop or Desktop."/>
        </Col>
        <Col xs={12} md={6} lg={3} className='mt-3 mt-lg-0'>
          <StatCard icon={<BsCodeSlash size={50} className='bg-danger p-2 rounded-circle mb-3'/>} title="Coder Friendly" description="Clean code, well documented and easy to customize as you want."/>
        </Col>
        <Col xs={12} md={6} lg={3} className='mt-3 mt-lg-0'>
          <StatCard icon={<GrTechnology size={50} className='bg-warning p-2 rounded-circle mb-3'/>} title="Modern Tech" description="Built with modern lightweight technologies to seek everyone's attention."/>
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPage