export const isBrowser = typeof window !== "undefined"

export const getUser = () =>
  isBrowser && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ user, password }) => {
  if (user === "john" && password === "demo")
    return setUser({
      user: "john",
      name: "johnny",
      email: "johnny@exammle.com",
    })
  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.user
}

export const logout = callback => {
  setUser({})
  callback()
}
