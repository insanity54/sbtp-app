import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Settings from "../components/Settings"
import Rewards from "../components/Rewards"
import Login from "../components/login"

const User = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/user/profile" component={Profile} />
      <PrivateRoute path="/user/settings" component={Settings} />
      <PrivateRoute path="/user/rewards" component={Rewards} />
      <Login path="/user/login" />
    </Router>
  </Layout>
)
export default User
