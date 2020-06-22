import React from "react";
import { Modal } from "./Modal";
import styled from "styled-components";
import { th } from "@xstyled/system";
import Icon from "react95/core/Icon/Icon";
import Input from "react95/core/Input/Input";

import auth from "../net/auth";
import { Checkbox } from "react95/core";

const Button = styled.button`
  height: 25px;
  width: 75px;
  border: none;
  margin-top: 7px;
  margin-right: 10px;
  font-size: 12px;
  margin-left: auto;
  box-shadow: inset 1px 1px 0px 1px ${th("colors.white")},
    inset 0 0 0 1px ${th("colors.grays.3")}, 1px 1px 0 0px ${th("colors.black")};
  &:disabled {
    color: grays.3;
  }
  &:focus {
    outline: ${th("space.1")}px dotted ${th("colors.black")};
    outline-offset: -${th("space.5")}px;
    box-shadow: inset 1px 1px 0px 1px ${th("colors.white")},
      inset -0.5px -0.5px 0px 1px ${th("colors.grays.3")},
      1px 1px 0 1px ${th("colors.black")};
  }
  &:active {
    padding: 8 20 4;
    outline: ${th("space.1")}px dotted ${th("colors.black")};
    outline-offset: -${th("space.5")}px;
    box-shadow: inset 0 0 0 1px ${th("colors.grays.3")},
      0 0 0 1px ${th("colors.black")};
  }
`;

const Label = styled.p`
  font-size: 12px;
  margin-top: 10px;
  display: inline-block;
`;

const DialogIcon = styled(Icon)`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  display: inline-block;
`;

const RightSideInput = styled(Input)`
  width: 70%;
  box-sizing: border-box;
  display: inline-block;
`;
const InputLabel = styled(Label)`
  width: 30%;
`;
const StyledModal = styled(Modal)`
  justify-content: center;
`;

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      pass: "",
      confirmPass: "",
      email: "",
      register: false,
      createTeam: true,
      teamName: "",
      inviteCode: "",
    };
  }
  updateUser = (e) => {
    this.setState({ user: e.target.value });
  };

  updatePass = (e) => {
    this.setState({ pass: e.target.value });
  };

  handleLogin = () => {
    auth
      .login(this.state.user, this.state.pass)
      .then(() => this.props.loginHandler());
  };

  handleRegister = () => {
    if (this.state.pass === this.state.confirmPass)
      auth.register(this.state.teamName, this.state.inviteCode, this.state.createTeam, this.state.user, this.state.pass, this.state.email);
  };
  handleRegisterSwitch = () => {
    this.setState({
      register: true,
    });
  };
  handleLoginSwitch = () => {
    this.setState({
      register: false,
    });
  };

  handleCheckInputChange = (event) => {
    const target = event.target;
    this.setState({
      [target.name]: !target.checked,
    });
  };

  handleInputChange = (event) => {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    if (!this.state.register) {
      return (
        <StyledModal
          width={450}
          height={200}
          title="Enter rgbCTF Password"
          icon="computer"
          defaultPosition={{
            x: window.outerWidth / 2 - 225,
            y: window.outerHeight / 2 - 200,
          }}
        >
          <div style={{ display: "flex", "flex-direction": "row" }}>
            <DialogIcon name="mprserv_120" size="60" />
            <div
              style={{
                "flex-grow": "1",
                display: "flex",
                "flex-direction": "column",
              }}
            >
              <Label>Type a username and password to log on to rgbCTF</Label>
              <div>
                <InputLabel>Username</InputLabel>
                <RightSideInput
                  style={{}}
                  name="user"
                  onChange={this.handleInputChange}
                  value={this.state.user}
                ></RightSideInput>
              </div>
              <div>
                <InputLabel>Password</InputLabel>
                <RightSideInput
                  style={{}}
                  name="pass"
                  onChange={this.handleInputChange}
                  value={this.state.pass}
                ></RightSideInput>
              </div>
            </div>
            <div style={{ display: "inline-block", "margin-left": "12px" }}>
              <Button value="Login" onClick={this.handleLogin}>
                Login
              </Button>
              <br />
              <Button value="Register" onClick={this.handleRegisterSwitch}>
                Register
              </Button>
            </div>
          </div>
        </StyledModal>
      );
    } else {
      return (
        <StyledModal
          width={450}
          height={350}
          title="Register for rgbCTF"
          icon="computer"
          defaultPosition={{
            x: window.outerWidth / 2 - 225,
            y: window.outerHeight / 2 - 200,
          }}
        >
          <div style={{ display: "flex", "flex-direction": "row" }}>
            <DialogIcon name="mprserv_120" size="60" />
            <div
              style={{
                "flex-grow": "1",
                display: "flex",
                "flex-direction": "column",
              }}
            >
              <Label>Sign up for rgbCTF</Label>
              <div>
                <InputLabel>Username</InputLabel>
                <RightSideInput
                  style={{}}
                  name="user"
                  onChange={this.handleInputChange}
                  value={this.state.user}
                ></RightSideInput>
              </div>
              <div>
                <InputLabel>Password</InputLabel>
                <RightSideInput
                  style={{}}
                  name="pass"
                  onChange={this.handleInputChange}
                  value={this.state.pass}
                ></RightSideInput>
              </div>
              <div>
                <InputLabel>Confirm Password</InputLabel>
                <RightSideInput
                  style={{}}
                  name="confirmPass"
                  onChange={this.handleInputChange}
                  value={this.state.confirmPass}
                ></RightSideInput>
              </div>
              <div>
                <InputLabel>Email</InputLabel>
                <RightSideInput
                  style={{}}
                  name="email"
                  onChange={this.handleInputChange}
                  value={this.state.email}
                ></RightSideInput>
              </div>
              <Checkbox
                name="createTeam"
                onClick={this.handleCheckInputChange}
                checked={!this.state.createTeam}
              >
                I want to join an existing team
              </Checkbox>

              {this.state.createTeam && (
                <>
                  <div>
                    <InputLabel>New Team Name</InputLabel>
                    <RightSideInput
                      style={{}}
                      name="teamName"
                      onChange={this.handleInputChange}
                      value={this.state.teamName}
                    ></RightSideInput>
                  </div>
                  <div>
                    <InputLabel>New Team Invite Code</InputLabel>
                    <RightSideInput
                      style={{}}
                      name="inviteCode"
                      onChange={this.handleInputChange}
                      value={this.state.inviteCode}
                    ></RightSideInput>
                  </div>
                </>
              )}
              {!this.state.createTeam && (
                <>
                  <div>
                    <InputLabel>Team Name</InputLabel>
                    <RightSideInput
                      style={{}}
                      name="teamName"
                      onChange={this.handleInputChange}
                      value={this.state.teamName}
                    ></RightSideInput>
                  </div>
                  <div>
                    <InputLabel>Team Invite Code</InputLabel>
                    <RightSideInput
                      style={{}}
                      name="inviteCode"
                      onChange={this.handleInputChange}
                      value={this.state.inviteCode}
                    ></RightSideInput>
                  </div>
                </>
              )}
            </div>

            <div style={{ display: "inline-block", "margin-left": "12px" }}>
              <Button value="Register" onClick={this.handleRegister}>
                OK
              </Button>
              <br />
              <Button value="Login" onClick={this.handleLoginSwitch}>
                Login
              </Button>
            </div>
          </div>
        </StyledModal>
      );
    }
  }
}

export default LoginPage;
