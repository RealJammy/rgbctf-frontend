import React from "react";

import clippy from "clippyjs";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@react95/core";
import ChallengeModal from "./components/ChallengeModal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [
        {
          name: "abc",
          category: "OSINT",
        },
      ],
      challengeModals: []
    };
    this.handleOpen = this.handleOpen.bind(this)
  }

  handleOpen(challenge) {
    this.setState({
      challenges: this.state.challenges,
      challengeModals: this.state.challengeModals.concat(<ChallengeModal name={challenge.name} category={challenge.category}></ChallengeModal>)
    })
  }

  render() {
    clippy.load("Clippy", function (agent) {
      // do anything with the loaded agent
      agent.show();
    });
    clippy.load("Bonzi", function (agent) {
      // do anything with the loaded agent
      agent.show();
    });

    return (
      <ThemeProvider>
        {this.state.challengeModals.map((chall) => {
          console.log(chall);
          return chall;
        })}

        <Navbar challenges={this.state.challenges} handleOpen={this.handleOpen}/>
      </ThemeProvider>
    );
  }
}
export default App;
