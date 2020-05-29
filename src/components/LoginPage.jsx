import React from "react";
import { Modal } from "./Modal";
import styled from "styled-components";
import { th } from "@xstyled/system";
import Icon from "@react95/core/Icon/Icon";

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
font-size:12px;
margin-left:100px;
margin-right:auto;
margin-top:10px;
`;

const StyledIcon = styled(Icon)`
margin-left: 20px;
margin-top: 10px;
margin-right: auto;
margin-bottom: auto;
position:absolute;
`

class LoginPage extends React.Component {
  handleLogin = () => {};
  render() {
    return (
      <Modal
        width={450}
        height={200}
        title="Enter rgbCTF Password"
        icon="computer"
      >
          <div
          style={{ display: "flex", flexDirection: "column", flexGrow: "1" }}
        > <StyledIcon name="mprserv_120" size="60"/></div>
         
          <Label>Type a username and password to log on to rgbCTF</Label>
        <div
          style={{ display: "flex", flexDirection: "column", flexGrow: "1" }}
        >
          <Button value="OK" onClick={this.handleLogin}>
            OK
          </Button>
          <Button value="Cancel" onClick={this.handleLogin}>
            Cancel
          </Button>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", flexGrow: "1" }}
        ><Label>abc</Label></div>
      </Modal>
    );
  }
}

export default LoginPage;
