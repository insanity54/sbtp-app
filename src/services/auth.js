import axios from 'axios';

export const isBrowser = () => typeof window !== "undefined"
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("user") ?
  JSON.parse(window.localStorage.getItem("user")) :
  {}

export const setUser = user =>
  window.localStorage.setItem("user", JSON.stringify(user))

export const handleLogin = ({
  username,
  password
}) => {
  if (username === `john` && password === `pass`) {
    return setUser({
      username: `john`,
      name: `Johnny`,
      email: `johnny@example.org`,
    })
  }
  return false
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}
