import React from "react";

import getScoreboard from "../net/scoreboard";
import { Modal } from "./Modal";
import ProgressBar from "react95/core/ProgressBar";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
`;

const LeftLabel = styled.p`
  margin-right: 10px;
  margin-block-start: 0;
`;

const RightLabel = styled.p`
  margin-left: 10px;
  margin-block-start: 0;
`;

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      index: 0,
      maxScore: 10,
    };
    this.refreshScoreboard(this.state.index);
  }

  refreshScoreboard = (index) => {
    getScoreboard(index).then((data) =>
      this.setState({
        teams: data.teams.slice(index, index + 10).map((entry, index) => {
          return (
            <Row>
              <LeftLabel>{entry.name}</LeftLabel>
              <ProgressBar width={100} percent={100}></ProgressBar>
              <RightLabel>{entry.points} pts</RightLabel>

            </Row>
          );
          //    return {id: index, label: `${index + 1}. ${entry.name}, with ${entry.points} points` };
        }),
      })
    );
  };

  render() {
    return (
      <Modal
        width={600}
        height={400}
        buttons={[
          {
            value: "<",
            onClick: () => {
              this.setState({ index: this.state.index - 10 }, () =>
                this.refreshScoreboard(this.state.index)
              );
            },
            disabled: this.state.index < 10,
          },

          {
            value: ">",
            onClick: () => {
              this.setState({ index: this.state.index + 10 }, () =>
                this.refreshScoreboard(this.state.index)
              );
            },
          },
        ]}
      >
        {this.state.teams}
      </Modal>
    );
  }
}
export default Scoreboard;
