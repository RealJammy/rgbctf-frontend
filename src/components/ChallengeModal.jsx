import Input from "react95/core/Input";
import List from "react95/core/List";
import { Modal } from "./Modal";
import React from "react";
import styled from "styled-components";
import { submitChall } from "../net/chall";

class ChallengeModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
      flag: "",
      solved: false,
    };
  }

  handleOpenModal = () => this.setState({ showModal: true });

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleSubmit = () => {
    submitChall(this.props.name, this.state.flag).then(() => {
      this.setState({solved: true});
    });
    this.props.handleSubmit();
  };

  componentDidMount() {
    this.setState({ solved: this.props.solved });
  }
  handleInputChange = (event) => {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  };
  render() {
    const { children } = this.props;
    const { showModal } = this.state;
    return (
      <>
        {showModal && (
          <Modal
            width={600}
            height={400}
            icon="computer"
            title={this.props.name}
            closeModal={this.handleCloseModal}
            buttons={[
              {
                value: "Submit",
                onClick: this.handleSubmit,
                disabled: this.state.solved,
              },
            ]}
            menu={[
              {
                name: "File",
                list: (
                  <List>
                    <List.Item onClick={this.handleCloseModal}>Exit</List.Item>
                  </List>
                ),
              },
            ]}
            leftOfButton={
              <>
              {this.props.value} points
              <Input
                placeholder={!this.state.solved && "rgbCTF{...}"}
                name="flag"
                value={this.state.flag}
                onChange={this.handleInputChange}
              ></Input></>
            }
          >
            {this.props.description}
            {children}
          </Modal>
        )}
      </>
    );
  }
}

export default ChallengeModal;
