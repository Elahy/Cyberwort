import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
// import Button from '@material-ui/core/Button';
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/images/workstation.jpg"
    })`,
  },
  menuButton: {
    marginRight: "5%",
    color: "white",
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontFamily: "'Varela Round', sans-serif",
    fontSize: 20,
    marginLeft: "5%",
  },
  header: {
    color: "#282c34",
    backgroundColor: "#282c34",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header className="">
        <div>
          <AppBar className={classes.header} position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Cyberwort
              </Typography>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
      </header>
      <main>
        <CssBaseline />
        <h1 className="tag">Cyberwort : Software from Future</h1>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
