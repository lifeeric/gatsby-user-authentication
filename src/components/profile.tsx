import * as React from "react"
import { cache } from "../utils/cache"
import { gql, useQuery } from "@apollo/client"

const GET_STATE = gql`
  query STATE {
    cartItems @client
  }
`

export const Profile: React.FC = () => {
  const { data, loading, error } = useQuery(GET_STATE)
  let name = data.cartItems.name
  let email = data.cartItems.email
  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {name}</li>
        <li>E-mail:{email} </li>
      </ul>
    </>
  )
}
