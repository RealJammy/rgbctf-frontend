import React from "react";

import Navbar from "./components/Navbar";
import { ThemeProvider } from "react95/core";
import ChallengeModal from "./components/ChallengeModal";
import LoginPage from "./components/LoginPage";
import Scoreboard from "./components/Scoreboard";
import GlobalStyles from "react95/core/GlobalStyle";
import { getChallenges } from "./net/chall";
import Cookies from "js-cookie";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      challenges: [],
      challengeModals: [],
      loggedIn: false,
      showScoreboard: false,
      challUpdated: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen(challenge) {
    this.setState({
      challenges: this.state.challenges,
      challengeModals: this.state.challengeModals.concat(
        <ChallengeModal
          description={challenge.description}
          name={challenge.name}
          category={challenge.category}
          solved={challenge.solved}
          handleSubmit={() => this.setState({challUpdated: false})}
          value={challenge.points}
        ></ChallengeModal>
      ),
      loggedIn: this.state.loggedIn,
    });
  }


  render() {
    if (this.state.loggedIn && !this.state.challUpdated) {
      console.log(getChallenges());
      getChallenges().then((data) => {
        this.setState({ challenges: data, challUpdated: true });
      });
    }
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
            return chall;
          })}
        {this.state.loggedIn && (
          <Navbar
            challenges={this.state.challenges}
            handleOpen={this.handleOpen}
            handleScoreboard={(show) => this.setState({ showScoreboard: true })}
          />
        )}
        {this.state.showScoreboard && <Scoreboard></Scoreboard>}
      </ThemeProvider>
    );
  }
}
export default App;
