import { gql, useQuery } from "@apollo/client"
import { cache } from "../utils/cache"

const GET_STATE = gql`
  query STATE {
    cartItems @client
  }
`

export const useState = () => {
  const { data, loading, error } = useQuery(GET_STATE)

  return [data, loading, error] as const
}
