import { AppBar, Box, Button, Grid, IconButton, Toolbar } from "@mui/material";
import { useState } from "react";
import useStyles from "./styles";
import Logo from "../../assets/logo.svg";
import SmallLogo from "../../assets/logo_small.svg";
import classNames from "classnames";
import { Search as SearchIcon } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function MyAppBar() {
  const navigate = useNavigate();
  let classes = useStyles();
  const location = useLocation(); // React Hook

  let [tab, setTab] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTab(0);
        break;
      case "/about":
        setTab(1);
        break;
      case "/contact":
        setTab(2);
        break;
      default:
        break;
    }
  });

  return (
    <AppBar className={classes.appBar} position="sticky">
      <Toolbar className={classes.toolBar}>
        <Grid className={classes.section1} container>
          <Link to="/">
            <Box
              className={classes.logo}
              component="img"
              sx={{
                content: {
                  xs: `url(${SmallLogo})`, //img src from xs up to md
                  md: `url(${Logo})`, //img src from md and up
                },
              }}
              alt="Logo"
            />
          </Link>
        </Grid>
        <Grid className={classes.section2} container>
          <Button
            sx={{ mx: 2 }}
            component={Link}
            to="/"
            className={classNames(classes.navItemBtn, {
              [classes.navItemBtnSelected]: tab === 0,
            })}
          >
            Home
          </Button>
          <Button
            sx={{ mx: 2 }}
            component={Link}
            to="/about"
            // className={classes.navItemBtn}
            className={classNames(classes.navItemBtn, {
              [classes.navItemBtnSelected]: tab === 1,
            })}
          >
            About
          </Button>
          <Button
            sx={{ mx: 2 }}
            component={Link}
            to="/contact"
            className={classNames(classes.navItemBtn, {
              [classes.navItemBtnSelected]: tab === 2,
            })}
          >
            Contact
          </Button>
        </Grid>
        <Grid className={classes.section3} container>
          <IconButton
            sx={{ mx: 2 }}
            component={Link}
            to="/search"
            variant="text"
          >
            <SearchIcon />
          </IconButton>
          <Button
            sx={{ mx: 2 }}
            component={Link}
            to="/register"
            variant="contained"
            className={classes.joinBtn}
          >
            Join Us
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
