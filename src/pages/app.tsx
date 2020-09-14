import * as React from "react"
import { Router } from "@reach/router"
import { Layout } from "../components/layout"
import { Profile } from "../components/profile"
import { Login } from "../components/login"
import { PrivateRoute } from "../components/privateRotue"
import "./index.css"

export default () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)
