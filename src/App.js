import React, { useRef } from "react";
import Sidebar from "./components/Sidebar.js";
import Main from "./components/Main.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import ReactToPrint from "react-to-print";
import PrintIcon from "@material-ui/icons/Print";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3D3D3D",
    },
    secondary: {
      main: "#3D3D3D",
    },
  },
  typography: {
    fontFamily: "Arial",
    fontSize: 15,
  },
});
function App() {
  const classes = useStyles();
  const componentRef = useRef();
  return (
    <div className="App">
      <div className={classes.root} ref={componentRef}>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Sidebar />
          <Main />
          <ReactToPrint
            trigger={() => (
              <div>
                <Tooltip title="Print" aria-label="Print">
                  <Fab color="secondary" className={classes.absolute}>
                    <PrintIcon />
                  </Fab>
                </Tooltip>
              </div>
            )}
            content={() => componentRef.current}
          />
        </MuiThemeProvider>
      </div>
    </div>
  );
}
export default App;
