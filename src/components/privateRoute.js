import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/user/login`) {
    navigate("/user/login")
    return null
  }
  return (
    <div>
      <Component {...rest} />
    </div>
  )
}
export default PrivateRoute
