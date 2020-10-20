import React from "react";
import { Grid, AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <Grid container>
      <Grid xs={12}>
        <AppBar position="static" color={'white'} position={'fixed'}>
          <Toolbar>
          <Link to="/"  className={'App-logo'}>
            <img src={props.logo}/>
            </Link>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <Link to="/event">
              <Typography>
                EVENT
              </Typography>

              </Link>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
};
export default Header;
