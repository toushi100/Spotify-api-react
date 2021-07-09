import React, { Component } from "react";
import { render } from "react-dom";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import Room from "./Room";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Grid container spacing={1}>
              <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                  Welcome to the party
                </Typography>
              </Grid>

              <Grid item xs={12} align="center">
                <Button
                  color="primary"
                  variant="contained"
                  to="/create"
                  component={Link}
                >
                  Create A Room
                </Button>
              </Grid>
              <Grid item xs={12} align="center">
                <Button
                  color="secondary"
                  variant="contained"
                  to="/join"
                  component={Link}
                >
                  join
                </Button>
              </Grid>
              <Grid item xs={12} align="center">
                <Button
                  color="secondary"
                  variant="contained"
                  to="/room"
                  component={Link}
                >
                  Room
                </Button>
              </Grid>
            </Grid>
          </Route>
          <Route path="/join" component={RoomJoinPage} />
          <Route path="/create" component={CreateRoomPage} />
          <Route path="/room/:roomCode" component={Room} />
        </Switch>
      </Router>
    );
  }
}
