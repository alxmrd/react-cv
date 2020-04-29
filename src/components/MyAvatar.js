import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../assets/avatar.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
    justifyContent: "center",
  },

  large: {
    width: "70%",
    height: "90%",
    margin: "10px",
  },
}));

export default function MyAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />
    </div>
  );
}
