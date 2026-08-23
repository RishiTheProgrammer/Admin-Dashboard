import { Card } from 'react-bootstrap'

const ProjectCard = ({title, number}) => {
  return (
    <Card>
        <Card.Body>
            <Card.Text>{title}</Card.Text>
            <Card.Title>{number}</Card.Title>
        </Card.Body>
    </Card>
  )
}

export default ProjectCard