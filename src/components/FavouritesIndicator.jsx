import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { BsFillStarFill } from "react-icons/bs"
import { useSelector } from "react-redux"

const FavouritesIndicator = () => {
  const navigate = useNavigate()
  const favouritesLength = useSelector(
    (state) => state.favourites.content.length
  )

  return (
    <div className="ml-auto mt-3 mb-4 ">
      <Button
        className="d-flex align-items-center"
        color="primary"
        onClick={() => navigate("/favourites")}
      >
        <BsFillStarFill />
        <span className="ml-2">{favouritesLength}</span>
      </Button>
    </div>
  )
}

export default FavouritesIndicator
