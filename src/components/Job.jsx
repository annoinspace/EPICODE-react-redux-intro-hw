import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { BsFillStarFill } from "react-icons/bs"

const Job = ({ data }) => (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: "1px solid #00000033", borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={8}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
    <Col xs={1}>
      <div className="star-icon">
        <BsFillStarFill />
      </div>
    </Col>
  </Row>
)

export default Job
