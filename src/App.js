import React from "react";
import Sidebar from "./components/Sidebar.js";
import Main from "./components/Main.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
