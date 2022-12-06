import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button, Row, Col } from "react-bootstrap"
import { FaTrash } from "react-icons/fa"
import { removeFromFavouritesAction } from "../redux/actions"
import DangerousHTML from "./DangerousHTML"

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
              <div
                key={i}
                className="my-4 d-flex align-items-center justify-content-between border p-2 m-5"
              >
                <div className="ml-2">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="display-4 ">{company.company_name}</h3>
                    <div className="ml-3">
                      <Button
                        className="delete-btn"
                        variant="danger"
                        onClick={() => {
                          dispatch(removeFromFavouritesAction(i))
                        }}
                      >
                        <FaTrash />
                      </Button>
                    </div>
                  </div>
                  <DangerousHTML description={company.description} />
                </div>
              </div>
            ))}
          </ul>
        </Col>
      </Row>
    </>
  )
}

// <p>Etsy
