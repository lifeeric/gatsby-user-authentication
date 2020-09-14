// import * as React from "react"
import { Link as GLink, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../utils/auth"

// export const NavBar: React.FC = () => {

//   return (
//     <div
//       style={{
//         display: "flex",
//         flex: "1",
//         justifyContent: "space-between",
//         borderBottom: "1px solid #ccc",
//       }}
//     >
//       <nav>
//         <Link to="/">Home</Link> <Link to="/app/profile">Profile</Link>
//         {isLoggedIn() ? (
//           <a
//             href="/"
//             onClick={event => {
//               event.preventDefault()
//               logout(() => navigate("/app/login"))
//             }}
//           >
//             Logout
//           </a>
//         ) : null}
//       </nav>
//     </div>
//   )
// }

import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Link from "@material-ui/core/Link"

import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: 0,
      padding: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      paddingLeft: theme.spacing(1),
    },
  })
)

export const NavBar = () => {
  const classes = useStyles()

  let greetingMessage = ""
  if (isLoggedIn()) {
    greetingMessage = `Hello ${getUser().name}`
  } else {
    greetingMessage = "You are not logged in!"
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            {greetingMessage}
          </Typography>
          <Link
            className={classes.link}
            to="/"
            component={GLink}
            color="inherit"
          >
            Home
          </Link>
          <Link
            className={classes.link}
            to="/app/profile"
            component={GLink}
            color="inherit"
          >
            Profile
          </Link>
          {isLoggedIn() ? (
            <Link
              className={classes.link}
              href=""
              onClick={event => {
                event.preventDefault()
                logout(() => navigate("/app/login"))
              }}
              color="inherit"
            >
              Logout
            </Link>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  )
}
