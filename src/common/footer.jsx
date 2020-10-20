import React from "react";
import { Grid } from "@material-ui/core";

const Footer = props => {
  return (
    <Grid container>
      <Grid xs={12}>
        <img src={props.logo} />
        @nani-graphers
      </Grid>
    </Grid>
  );
};
export default Footer;
