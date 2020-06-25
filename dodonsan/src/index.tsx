import React from "react"
import ReactDOM from "react-dom"
import Root from "./Root"
import * as serviceWorker from "./serviceWorker"
import configureStore from "redux/configureStore"

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister()
