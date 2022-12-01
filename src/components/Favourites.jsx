import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button, Row, Col } from "react-bootstrap"
import { FaTrash } from "react-icons/fa"

export default function Favourites() {
  const favourites = useSelector((state) => state.favourites.content)
  const dispatch = useDispatch()

  console.log(favourites)

  return (
    <>
      <Row>
        <Col sm={12}>
          <h1 className="text-center m-5">Favourite Companies</h1>
        </Col>
        <Col sm={12}>
          <ul style={{ listStyle: "none" }}>
            {favourites.map((company, i) => (
              <div key={i} className="my-4 d-flex">
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_FAVOURITES",
                      payload: i
                    })
                  }}
                >
                  <FaTrash />
                </Button>
                <div>
                  <h3 className="ml-2">{company.company_name}</h3>
                  {/* <p>{company.description}</p> */}
                </div>
              </div>
            ))}
          </ul>
        </Col>
      </Row>
    </>
  )
}
