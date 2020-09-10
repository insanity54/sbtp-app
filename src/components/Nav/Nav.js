import React from "react"
import { useLocation } from "@reach/router"
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { isLoggedIn } from '../../services/auth'
import UserWidget from './UserWidget'

const Nav = () => {
  let location = useLocation();
  let isLoginPage = () => {
    return (
      location.pathname === '/user/login' ||
      location.pathname === '/login'
    ) ? true : false;
  }

  return (
    <>
      {(!isLoginPage() && !isLoggedIn()) && <LoginButton />}
      {isLoggedIn() && <LogoutButton />}
      {isLoggedIn() && <UserWidget/>}
    </>
  )
}


export default Nav
