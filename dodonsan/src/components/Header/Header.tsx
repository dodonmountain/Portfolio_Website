import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom";
import "./Header.css"

interface HeaderProps {}
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header>
        <img className="homelogo" src={require(`../../assets/homelogo.jpg`)} alt="homelogo" />
        <NavLink to="#" className="nav-item">ABOUT</NavLink>
        <NavLink to="#" className="nav-item">STACKS</NavLink>
        <NavLink to="#" className="nav-item">CODES</NavLink>
        <NavLink to="#" className="nav-item">ALGORITHMS</NavLink>
        <NavLink to="#" className="nav-item">CONTACT</NavLink>
      </header>
    </>
  )
}

export default connect(
  (state) => ({}),
  (dispatch) => ({})
)(Header)
