import { useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import Job from "./Job"
// import { useParams } from "react-router-dom"

const CompanySearchResults = () => {
  const [query, setQuery] = useState("")
  const [company, setCompany] = useState([])
  // const params = useParams()

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company="

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(baseEndpoint + query)
      if (response.ok) {
        const { data } = await response.json()
        setCompany(data)
      } else {
        alert("Error fetching results")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col
          xs={10}
          className="mx-auto my-3 d-flex justify-content-between align-items-center"
        >
          <h1>Company Search</h1>
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
          {company.map((companyData) => (
            <Job key={companyData._id} data={companyData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
