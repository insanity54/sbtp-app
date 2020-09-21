
export const isBrowser = () => typeof window !== "undefined"

  export const getUser = () => {
    if (typeof window !== 'undefined') {
      if (isBrowser() && window.localStorage.getItem("user")) {
        return JSON.parse(window.localStorage.getItem("user"))
      } else {
        return {}
      }
    } else {
      return {}
    }
  }

export const setUser = user => {
  if (typeof window !== 'undefined') {
    return window.localStorage.setItem("user", JSON.stringify(user))
  } else {
    return undefined
  }
}


export const isLoggedIn = () => {
  const user = getUser()
  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}
