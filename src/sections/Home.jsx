import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IoEllipsisHorizontal } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form'
import Sidebar from '../components/sidebar'
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
  console.log(number)
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => 
      clearInterval(timer)
  }, [])
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
        <Col className='rounded-2 border border-secondary'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos, optio soluta repellendus porro praesentium at, nulla suscipit et nesciunt error quasi, incidunt sunt quis vitae tempora. Necessitatibus, earum minus?
        </Col>
      </Row>
    </Container>
  )
}

export default Home