import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button, Row, Col } from "react-bootstrap"
import { FaTrash } from "react-icons/fa"
import { removeFromFavouritesAction } from "../redux/actions"

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
                  <h3>{company.company_name}</h3>
                  <p>{company.description.split("is")[1].split(".")[0]}.</p>
                  {/* <div dangerouslySetInnerHTML={company.description} /> */}
                </div>
                <div className="mr-2">
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
            ))}
          </ul>
        </Col>
      </Row>
    </>
  )
}

// <p>Etsy
