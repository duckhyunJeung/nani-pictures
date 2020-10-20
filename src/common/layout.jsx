import React from "react";
import Header from '../common/haeder';
import Footer from '../common/footer';
import { Grid } from "@material-ui/core";

const Layout = props => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header logo={props.logo}/>
      </Grid>
      <Grid item xs={12}>
        {props.children}
      </Grid>
      <Grid item xs={12}>
        <Footer logo={props.logo}/>
      </Grid>
    </Grid>
  );
};
export default Layout;
