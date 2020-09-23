import * as React from "react"
import { navigate } from "gatsby"
import { cache } from "../utils/cache"
import { gql, useQuery } from "@apollo/client"

interface Props {
  component: any
  location?: any
  rest: any
}

const GET_STATE = gql`
  query STATE {
    cartItems @client
  }
`

export const PrivateRoute: React.FC<Props> = ({
  component: Component,
  location,
  ...rest
}) => {
  const { data, loading, error } = useQuery(GET_STATE)

  let isLoggedIn = data.cartItems.authorized
  if (!isLoggedIn && location.pathname !== "/app/login") {
    navigate("/app/login")
    return null
  }
  return <Component {...rest} />
}
