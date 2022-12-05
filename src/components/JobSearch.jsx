import { useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import Job from "./Job"
import { getJobsAction } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const MainSearch = () => {
  const [query, setQuery] = useState("")
  // const [jobs, setJobs] = useState([])
  const dispatch = useDispatch()
  // const jobsFromRedux = useSelector((state) => state.jobs.jobList)
  //const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getJobsAction(query))
  }

  return (
    <Container>
      <Row>
        <Col
          xs={10}
          className="mx-auto my-3 d-flex justify-content-between align-items-center"
        >
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {/* {jobsFromRedux.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))} */}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
