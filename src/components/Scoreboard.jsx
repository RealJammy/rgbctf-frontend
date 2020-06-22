import React from "react";

import { Tree, Button } from "react95/core";

import {getScoreboard} from "../net/auth"

const { icons } = Tree;

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: this.props.teams,
    };
    this.onRefresh(1);
  }

  onRefresh = (index) =>  {
      const newTeams = getScoreboard(index).teams;
      if(newTeams != this.state.teams)
      this.setState({teams: newTeams})
    }



      

  render() {
    return (
      <>
        <Button onClick={this.onRefresh(1)}>Refresh</Button>
        <Tree data={this.state.teams}></Tree>
      </>
    );
  }
}
export default Scoreboard;
