import * as React from "react"
import { NavBar } from "./nav-bar"

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const Layout:React.FC<Props> = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
)
