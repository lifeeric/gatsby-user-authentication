import * as React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../utils/auth"

interface Props {
  component: any
  location?: any
  rest: any
}

export const PrivateRoute: React.FC<Props> = ({
  component: Component,
  location,
  ...rest
}) => {
  if (!isLoggedIn() && location.pathname !== "/app/login") {
    navigate("/app/login")
    return null
  }
  return <Component {...rest} />
}
