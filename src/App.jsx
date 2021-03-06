import React from "react";

import clippy from "clippyjs";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@react95/core";
import ChallengeModal from "./components/ChallengeModal";
import LoginPage from "./components/LoginPage";

import { cookie } from "react-cookie";

import GlobalStyles from "@react95/core/GlobalStyle";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [
        {
          name: "abc",
          category: "OSINT",
          description: "abc",
        },
        {
          name: "def",
          category: "Crypto",
          description: "def",
        },
      ],
      challengeModals: [],
      loggedIn: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
  }

  componentDidMount() {
    clippy.load("Clippy", function (agent) {
      // do anything with the loaded agent
      agent.show();
    });
    clippy.load("Bonzi", function (agent) {
      // do anything with the loaded agent
      agent.show();
    });
  }
  handleOpen(challenge) {
    this.setState({
      challenges: this.state.challenges,
      challengeModals: this.state.challengeModals.concat(
        <ChallengeModal
          description={challenge.description}
          name={challenge.name}
          category={challenge.category}
        ></ChallengeModal>
      ),
      loggedIn: this.state.loggedIn,
    });
  }

  render() {
    return (
      <ThemeProvider>
        <GlobalStyles></GlobalStyles>
        {!this.state.loggedIn && <LoginPage></LoginPage>}

        {this.state.loggedIn &&
          this.state.challengeModals.map((chall) => {
            console.log(chall);
            return chall;
          })
          (
            <Navbar
          challenges={this.state.challenges}
          handleOpen={this.handleOpen}
        />
          )
          }

        
      </ThemeProvider>
    );
  }
}
export default App;
