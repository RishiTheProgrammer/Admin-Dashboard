import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IoEllipsisHorizontal } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form'
import Sidebar from '../components/sidebar'
import ProjectCard from '../components/ProjectCard';
const Home = () => {
  const tasks = [
    {
      id: 1,
      title: "Learning React",
      completed: true
    },
    {
      id: 2,
      title: "Fixing Navbar",
      completed: true
    },
    {
      id: 3,
      title: "Learning Full GSAP",
      completed: false
    }   
  ]
  const number = tasks.length
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => 
      clearInterval(timer)
  }, []);
  const projects = [
    {
      id: 1,
      title: "Active Projects",
      number: 12,
      chartData: [20, 30, 40, 50, 60]
    },
    {
      id: 2,
      title: "Revenue Q2",
      number: "$74.5K",
      chartData: [30, 40, 45, 50, 60]
    },
    {
      id: 3,
      title: "Team Productivity",
      number: "94%",
      chartData: [20, 30, 40, 50, 70]
    }
  ]
  return (
    <Container fluid>
      <Row className='gap-3'>
        <Sidebar>
          <div className="mb-3">

          </div>
          <div className='mb-3'>
            <h4>Date</h4>
            <div className="d-flex justify-content-between">
              <h5>{time.toLocaleTimeString()}</h5>
              <h5>{time.toLocaleDateString()}</h5>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3 gap-5">
            <div className='d-flex gap-3 align-items-center'>
              <h4>Tasks</h4>
              <Badge bg="secondary">{number}</Badge>
            </div>
            <div className='gap-2'>
              <button className='btn border-0'>
                <FaPlus/>
              </button>
              <button className='btn border-0'>
                <IoEllipsisHorizontal/>
              </button>
            </div>
          </div>
          <div className="gap-2 flex-column d-flex">
            {
            tasks.map((task) => (
              <div key={task.id}>
                <Form.Check label={task.title} type="checkbox" checked={task.completed} className='fs-5'/>
              </div>
            ))
          }
          </div>
        </Sidebar>
        <Col className='rounded-2 bg-body-tertiary'>
          <Row className='justify-content-evenly mt-3 px-3'>
            <h2>Projects Overview</h2>
            {projects.map((project) => (
              <Col key={project.id} className="mt-3 mt-lg-0 rounded border-3">
                <ProjectCard title={project.title} number={project.number}/>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Home