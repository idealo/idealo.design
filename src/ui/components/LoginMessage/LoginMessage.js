import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";
import s from "./LoginMessage.module.scss";

class LoginMessage extends React.Component {
  render() {
    return (
      <div className={s.LoginMessage}>
        <div>
          Please <a href="/auth/provider">log in</a>, in order to see the{" "}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(LoginMessage);
