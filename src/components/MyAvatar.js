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
    marginTop: "20px",
    marginBottom: "20px",
  },

  large: {
    width: "70%",
    height: "90%",
    margin: "10px",
    border: `5px solid ${theme.palette.background.paper}`,
  },
}));

export default function MyAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Profil" src={avatar} className={classes.large} />
    </div>
  );
}
