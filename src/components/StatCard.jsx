import { Card } from 'react-bootstrap'

const StatCard = ({icon, title, description, CardBodyClass}) => {
  return (
    <Card className="bg-transparent p-3 rounded-3 border-3 border-secondary text-white">
        <Card.Body className={CardBodyClass}>
            {icon}
            <Card.Title className="fs-3">{title}</Card.Title>
            <Card.Text className="text-secondary fw-semibold">{description}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default StatCard