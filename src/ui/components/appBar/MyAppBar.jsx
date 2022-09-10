import { AppBar, Button, ButtonBase, InputBase, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import useStyles from "./styles";
import Logo from "../../assets/logo.svg";
import classNames from "classnames";
import { Search as SearchIcon, Close as CloseIcon } from "@mui/icons-material";
import { createSearchParams, Link, useNavigate } from "react-router-dom";

export default function MyAppBar() {
  const navigate = useNavigate();
  var classes = useStyles();

  var [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <AppBar className={classes.appBar} position="sticky">
      <Toolbar className={classes.toolBar}>
        <img className={classes.logo} src={Logo} alt="Just Another blog logo" />
        <div className={classes.grow} />
        <div
          sx={{ display: { md: "flex", xs: "none" } }}
          className={classNames(classes.search, {
            [classes.searchFocused]: isSearchOpen,
          })}
        >
          <div
            className={classes.searchIcon}
            onClick={() => setSearchOpen(!isSearchOpen)}
          >
            {isSearchOpen ? (
              <CloseIcon classes={{ root: classes.headerIcon }} />
            ) : (
              <SearchIcon classes={{ root: classes.headerIcon }} />
            )}
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classNames(classes.inputInput, {
                [classes.inputInputOpened]: isSearchOpen,
              }),
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                navigate({
                  pathname: "search",
                  search: createSearchParams({
                    s: e.target.value,
                  }).toString(),
                });
                e.target.value = "";
                setSearchOpen(false);
              }
            }}
          />
        </div>
        <Button
          sx={{ mx: 2 }}
          component={Link}
          to="/"
          className={classes.navItemBtn}
        >
          HOME
        </Button>
        <Button
          sx={{ mx: 2 }}
          component={Link}
          to="/about"
          className={classes.navItemBtn}
        >
          ABOUT
        </Button>
        <Button
          sx={{ mx: 2 }}
          component={Link}
          to="/contact"
          className={classes.navItemBtn}
        >
          CONTACT
        </Button>
        <Button
          sx={{ mx: 2 }}
          component={Link}
          to="/register"
          variant="contained"
          className={classes.getStartedBtn}
        >
          GET STARTED
        </Button>
      </Toolbar>
    </AppBar>
  );
}
