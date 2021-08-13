import React from "react";
import { fetchUserInfo } from "./data";

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
        <div>Please login in order to view this part of the application.</div>
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
