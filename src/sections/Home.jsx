import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Sidebar from "../components/sidebar";
import ProjectCard from "../components/ProjectCard";
const Home = () => {
  const tasks = [
    {
      id: 1,
      title: "Learning React",
      completed: true,
    },
    {
      id: 2,
      title: "Fixing Navbar",
      completed: true,
    },
    {
      id: 3,
      title: "Learning Full GSAP",
      completed: false,
    },
  ];

  const number = tasks.length;

  const contact = [
    {
      id: 1,
      title: "Mail",
      href: "mailto:rishisprogramming@gmail.com"
    },
    {
      id: 2,
      title: "Phone",
      href: "tel:+923343337300"
    },
    {
      id: 3,
      title: "SMS",
      href: "sms:+923343337300"
    }
  ];

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const projects = [
    {
      id: 1,
      title: "Active Projects",
      number: 12,
      chartType: "line",
      chartData: [4, 6, 5, 7, 6, 8],
    },
    {
      id: 2,
      title: "Revenue Q2",
      number: "$74.5K",
      chartType: "bar",
      chartData: [15, 22, 14, 28, 19, 32],
    },
    {
      id: 3,
      title: "Team Productivity",
      number: "94%",
      chartType: "doughnut",
      chartData: [94, 6],
    },
  ];
  return (
    <Container fluid>
      <Row className="gap-3">
        <Sidebar>
          <div className="mb-3">
            <h4>Date</h4>
            <div className="d-flex justify-content-between gap-4">
              <span>
                <h5>{time.toLocaleTimeString()}</h5>
              </span>
              <span>
                <h5>{time.toLocaleDateString()}</h5>
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-3 flex-column">
            <div className="d-flex justify-content-between align-items-center w-100 mb-2">
              <h4>Tasks</h4>
              <span className="px-2 rounded-2 bg-primary-subtle fs-5">
                {number}
              </span>
            </div>
            <div className="gap-2 flex-column d-flex">
              {tasks.map((task) => (
                <div key={task.id}>
                  <Form.Check
                    label={task.title}
                    type="checkbox"
                    checked={task.completed}
                    className="fs-5"
                  />
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="mb-3">
            <h4 className='mb-4'>Contact</h4>
            {contact.map((contacts) => (
              <a className='bg-body p-3 mx-1 rounded-2 text-decoration-none text-white' href={contacts.href} key={contacts.id}>{contacts.title}</a>
            ))}
          </div>
        </Sidebar>
        <Col>
          <Row className="justify-content-evenly mt-3 px-lg-3">
            <h2>Projects Overview</h2>
            {projects.map((project) => (
              <Col
                key={project.id}
                className={`mt-3 mt-lg-0 rounded border-3 ${project.id % 2 === 0 ? "up-card" : "down-card"}`}
                xs={12}
                md={6}
                lg={4}
              >
                <ProjectCard
                  title={project.title}
                  number={project.number}
                  chartData={project.chartData}
                  chartType={project.chartType}
                />
              </Col>
            ))}
          </Row>

          <Row className="justify-content-evenly mt-3 px-lg-3"></Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
