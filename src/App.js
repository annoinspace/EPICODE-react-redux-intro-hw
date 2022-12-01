import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import JobSearch from "./components/JobSearch"
import CompanySearchResults from "./components/CompanySearchResults"
import Favourites from "./components/Favourites"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainNavbar from "./components/MainNavbar"

function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<JobSearch />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
