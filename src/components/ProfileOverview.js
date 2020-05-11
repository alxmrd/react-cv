import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
  subttile: {
    marginLeft: "20px",
  },
});

export default function ProfileOverview() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom align="center">
        PROFILE
      </Typography>

      <Typography
        className={classes.subttile}
        variant="subtitle1"
        gutterBottom
        align="left"
      >
        My name is Alexandros Mironidis and I am a graduate student at
        University of Western Macedonia at Department of Electrical & Computer
        Engineering.
      </Typography>
    </div>
  );
}
