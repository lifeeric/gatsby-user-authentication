import * as React from "react"
import { getUser } from "../utils/auth"

export const Profile: React.FC = () => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: {getUser().name}</li>
      <li>E-mail:{getUser().email} </li>
    </ul>
  </>
)
