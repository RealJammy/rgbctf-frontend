import React from "react";
import { Modal } from "./Modal";
import styled from "styled-components";
import { th } from "@xstyled/system";
import Icon from "@react95/core/Icon/Icon";
import Input from "@react95/core/Input/Input"

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
margin-top:10px;
display: inline-block;
`;

const DialogIcon = styled(Icon)`
margin-left: 20px;
margin-right: 20px;
margin-top: 10px;
display: inline-block;
`

const RightSideInput = styled(Input)`
width: 70%;
box-sizing: border-box;
display: inline-block;
`
const InputLabel = styled(Label)`
width: 30%;
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
        <div style={{ 'display': 'flex', 'flex-direction': 'row' }} >
          <DialogIcon name="mprserv_120" size="60"/>
          <div style={{ 'flex-grow': '1', 'display': 'flex', 'flex-direction': 'column' }} >
            <Label>Type a username and password to log on to rgbCTF</Label>
            <div><InputLabel>LUsername</InputLabel><RightSideInput style={{  }}></RightSideInput></div>
            <div><InputLabel>Password</InputLabel><RightSideInput style={{  }}></RightSideInput></div>
          </div>
          <div style={{ 'display': 'inline-block', 'margin-left': '12px' }}>
            <Button value="OK" onClick={this.handleLogin}>
              OK
            </Button><br />
            <Button value="Cancel" onClick={this.handleLogin}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default LoginPage;
