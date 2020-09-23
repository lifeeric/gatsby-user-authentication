import { cartItemsVar } from "../utils/cache"
export const isBrowser = typeof window !== "undefined"

export const handleLogin = ({ user, password }) => {
  if (user === "john" && password === "demo")
    return cartItemsVar({
      ...cartItemsVar(),
      authorized: true,
      user: "john",
      name: "johnny",
      email: "johnny@example.com",
    })
  return false
}

export const logout = callback => {
  cartItemsVar({
    authorized: false,
    user: "",
    name: "",
    email: "",
  })
  callback()
}
