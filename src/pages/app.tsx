import * as React from "react"
import { Router } from "@reach/router"
import { Layout } from "../components/layout"
import { Profile } from "../components/profile"
import { LoginAuth } from "../components/loginAuth"
import { PrivateRoute } from "../components/privateRotue"
import "./index.css"

export default () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <LoginAuth path="/app/login" />
    </Router>
  </Layout>
)
