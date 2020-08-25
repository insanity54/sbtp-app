import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import ProviderConnectCallback from '../components/ProviderConnectCallback'


const Connect = () => (
  <Layout>
    <Router>
      <ProviderConnectCallback path="/connect/:providerName/callback"/>
    </Router>
  </Layout>
)
export default Connect
