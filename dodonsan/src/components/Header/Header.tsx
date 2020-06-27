import React, { Component } from "react";
import { connect } from "react-redux";
import "./Header.css"

interface HeaderProps {}
class Header extends Component<HeaderProps> {

  render() {
    return (
      <>
        <header>하이</header>
      </>
    );
  }
}

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(Header);
