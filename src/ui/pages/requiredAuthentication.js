import React from "react";
import { fetchUserInfo } from "./BlogPage/data";
import LoginMessage from "../components/LoginMessage";

export function requiredAuthentication(Component) {
  return class AuthenticatedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
        userInfo: {},
      };
    }

    async componentDidMount() {
      const userInfo = await fetchUserInfo();
      const isLoggedIn = userInfo.status === "LOGGED_IN";
      this.setState({ userInfo, isLoggedIn });
    }

    render() {
      const loginErrorMessage = (
          <LoginMessage children='page'/>
      );
      return (
        <div>
          {this.state.isLoggedIn ? (
            <Component {...this.props} />
          ) : (
            loginErrorMessage
          )}
        </div>
      );
    }
  };
}

export default requiredAuthentication;
