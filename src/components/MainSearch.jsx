import { useState } from "react"
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap"
import Job from "./Job"
import { getJobsAction } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const MainSearch = () => {
  const [query, setQuery] = useState("")
  // const [jobs, setJobs] = useState([])
  const dispatch = useDispatch()
  let jobs = useSelector((state) => state.jobs.jobOptionsFromFetchArray)
  const areJobsLoading = useSelector((state) => state.jobs.isLoading)
  const errorWithFetch = useSelector((state) => state.jobs.isError)

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
        {areJobsLoading && (
          <Col>
            {" "}
            <Spinner animation="border" variant="info" />
          </Col>
        )}
        {errorWithFetch ? (
          <Col>
            <div class="alert alert-danger" role="alert">
              {" "}
              Something went wrong :S
            </div>
          </Col>
        ) : (
          <Col xs={10} className="mx-auto mb-5">
            {jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default MainSearch
