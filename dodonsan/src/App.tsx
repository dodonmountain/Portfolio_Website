import React from "react"
import HomePage from "pages/HomePage"
import { Route } from "react-router-dom"
import "./GlobalStyles.css"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
    </div>
  )
}

export default App
