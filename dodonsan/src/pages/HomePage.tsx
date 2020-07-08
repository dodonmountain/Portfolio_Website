import React from "react"
import { Header, SubHeader } from "../components"

const HomePage: React.FC<{}> = (props) => {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <h1>하하이</h1>
    </div>
  )
}

export default HomePage
