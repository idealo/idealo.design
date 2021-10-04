import React from "react";
import s from "./LoginMessage.module.scss";

class LoginMessage extends React.Component {
    handleLoginLogout(){
        if (typeof window !== 'undefined') {
            localStorage.setItem('lastVisitedPage', window.location.pathname)
        }
    }
  render() {
    return (
      <div className={s.LoginMessage}>
        <div className={s.pageTitle}>
          Please <a href="/auth/provider" onClick={this.handleLoginLogout}>log in</a>, in order to see the{" "}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default LoginMessage;
