import React from "react";

import Navbar from "./components/Navbar";
import { ThemeProvider } from "react95/core";
import ChallengeModal from "./components/ChallengeModal";
import LoginPage from "./components/LoginPage";
import Scoreboard from './components/Scoreboard'
import GlobalStyles from "react95/core/GlobalStyle";

import Cookies from 'js-cookie';

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
      showScoreboard: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
  }

  componentDidMount() {
  //  if(Cookies.get(username))
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
    console.log(this.state.challengeModals);

    return (
      <ThemeProvider>
        <GlobalStyles></GlobalStyles>
        {!this.state.loggedIn && (
          <LoginPage
            loginHandler={() => {
              this.setState({ loggedIn: true });
            }}
          ></LoginPage>
        )}

        {this.state.loggedIn &&
          this.state.challengeModals.map((chall) => {
            console.log(chall);
            return chall;
          })}
        {this.state.loggedIn && (
          <Navbar
            challenges={this.state.challenges}
            handleOpen={this.handleOpen}
            handleScoreboard={(show) => this.setState({showScoreboard: true})}
          />
        )}
        {this.state.showScoreboard && (
          <Scoreboard></Scoreboard>
        )}
      </ThemeProvider>
    );
  }
}
export default App;
