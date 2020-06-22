import Input from "react95/core/Input";
import List from "react95/core/List";
import { Modal } from "./Modal";
import React from "react";
import styled from "styled-components";



class ChallengeModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
    };
  }



  handleOpenModal = () => this.setState({ showModal: true });

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  componentDidMount() {}

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
            buttons={[{ value: "Submit", onClick: this.handleCloseModal }]}
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
            leftOfButton={<Input placeholder="rgbCTF{...}"></Input>}
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
