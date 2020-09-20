import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import ProfileContainer from "../containers/ProfileContainer"
import Settings from "../components/Settings"
import Rewards from "../components/Rewards"
import Login from "../components/login"

const User = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/user/profile/*" component={ProfileContainer} />
      <PrivateRoute path="/user/settings" component={Settings} />
      <PrivateRoute path="/user/rewards" component={Rewards} />
      <Login path="/user/login" />
    </Router>
  </Layout>
)
export default User
