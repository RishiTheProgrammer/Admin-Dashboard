import { Card } from 'react-bootstrap'
import './projectCard.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Line, Bar, Doughnut } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const ProjectCard = ({title, number, chartData, chartType}) => {
  const data = {
    labels: ["Jan", "Feb", "March", "April", "May", "Jun"],
    datasets: [
      {
        data: chartData,
        backgroundColor: "rgba(13, 110, 253, 0.15)",
        borderColor: "#0d6efd",
        borderWidth: 2,
        tension: 0.4,
      }
    ]
  }
  const doughnutData = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: chartData,
        backgroundColor: "rgba(13, 110, 253, 0.15)",
        borderColor: "#0d6efd",
        borderWidth: 2,
        tension: 0.4,
      }
    ]
  }

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  }

  let chart;

  if(chartType === "line"){
    chart = <Line data={data} options={options}/>
  }
  if(chartType === "doughnut"){
    chart = <Doughnut data={doughnutData} options={options}/>
  }
  if(chartType === "bar"){
    chart = <Bar data={data} options={options}/>
  }
  return (
    <Card className='custom-project-card'>
        <Card.Body>
            <Card.Text>{title}</Card.Text>
            <Card.Title>{number}</Card.Title>
              <div style={{height: "140px", position: "relative", width: "100%"}}>
                {chart}
              </div>
        </Card.Body>
    </Card>
  )
}

export default ProjectCard