import React from "react"
import { Layout } from "../components/layout"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import { useState } from "../components/useState"

const IndexPage = () => {
  const [data, loading, error] = useState()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  let isLoggedIn = data.cartItems.authorized
  let name = data.cartItems.name

  console.log(data)

  return (
    <Layout>
      <h1>Hellow {isLoggedIn ? name : "world"}!</h1>
      <p>
        {isLoggedIn ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/app/profile">profile</Link>
            <h1>Todo</h1>
          </>
        ) : (
          <>
            You should <Link to="/app/login">log in</Link> to see restricted
            content
          </>
        )}
      </p>
    </Layout>
  )
}

export default IndexPage
