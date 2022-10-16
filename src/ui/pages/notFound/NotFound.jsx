import { Button, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

export default function NotFound() {
  let classes = useStyles();

  return (
    <div className={classes.notfoundMain}>
      <div className={classes.notfound}>
        <div className={classes.notfound404}>
          <h1>404</h1>
        </div>
        <Typography className={classes.title} component="div" variant="h2">
          Oops,
          <Box className={classes.nothingSpan} component="span">
            {" "}
            nothing
          </Box>{" "}
          here...
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle1">
          Uh oh, we can't seem to find the page you're looking for.
          <br />
          Try going home or{" "}
          <Link className={classes.contactUsLink} to="/contact">
            contact us
          </Link>{" "}
          for more information.
        </Typography>
        <Button sx={{ mx: 2 }} component={Link} to="/" variant="contained">
          Take Me Home
        </Button>
      </div>
    </div>
  );
}
