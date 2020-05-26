import React, { useState } from "react";
import TaskBar from "@react95/core/TaskBar";
import { Modal } from "@react95/core/Modal";
import List from "@react95/core/List";
import ChallengeModal from "./ChallengeModal";

import ReactDom from "react-dom";

import context from "../lib/context";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logout: false,
      doLogout: () => (this.state.logout = true),
    };
  }



  render() {
    return (
      <>
        <TaskBar
          list={
            <>
              <List>
                <List.Item icon="shell32_135">
                  <List>
                    {this.props.challenges
                      .filter((chall) => chall.category === "OSINT")
                      .map((chall) => (
                        <List.Item key={chall.name} onClick={() => this.props.handleOpen(chall)}>
                          abc
                        </List.Item>
                      ))}

                    <List.Item icon="shell32_135">test2</List.Item>
                  </List>
                  OSINT
                </List.Item>
                <List.Item icon="shdocvw_259">
                  <List>
                    <List.Item icon="shell32_135">test3</List.Item>
                    <List.Item icon="shell32_135">test4</List.Item>
                  </List>
                  Crypto
                </List.Item>
                <List.Item icon="shdocvw_257">
                  <List>
                    <List.Item>test5</List.Item>
                    <List.Item>test6</List.Item>
                  </List>
                  Web
                </List.Item>
                <List.Divider />

                <List.Item icon="folder_file">Documents</List.Item>
                <List.Item icon="settings">
                  <List>
                    <List.Item icon="folder_settings">
                      Account Profile
                    </List.Item>
                    <List.Item icon="folder_print">Team Settings</List.Item>
                  </List>
                  Settings
                </List.Item>
                <List.Divider />
                <List.Item icon="computer_3">Shut Down...</List.Item>
              </List>

              <br />
            </>
          }
        />
      </>
    );
  }
}

export default NavBar;
