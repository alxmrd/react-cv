import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      backgroundColor: "#E4E4E4",
      width: "120%",
      height: "150px",
      marginLeft: "-50px",
      marginTop: "30px",
      marginBottom: "30px",
    },
  },
}));

export default function Title() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography variant="h5" align="center">
          Alexandros Mironidis
        </Typography>
        <Typography variant="h6" align="center">
          Software Engineer
        </Typography>
        <Typography variant="subtitle1" align="center">
          mironidis1@gmail.com | +30 6987326516
        </Typography>
      </Paper>
    </div>
  );
}
