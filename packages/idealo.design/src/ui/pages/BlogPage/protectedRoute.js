import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {fetchUserInfo} from "./data";

export function ProtectedRoute({component: Component }) {
    return class ProtectedRoutes extends React.Component {
        constructor(props) {
            console.log('1');
            super(props)
            this.state = {
                isLoggedIn: false,
                userInfo: {},
            }
        }

        async componentDidMount() {
            const userInfo = await fetchUserInfo()
            const isLoggedIn = userInfo.status === 'LOGGED_IN'
            this.setState({userInfo, isLoggedIn})
            console.log('componentDidMount setState:', isLoggedIn);
        }

        render(){
            return (
                <Route render={
                    props => {
                        if (this.state.isLoggedIn) {
                            return <Component {...props} />
                        } else {
                            return <Redirect to={
                                {
                                    pathname: '/blog'
                                }
                            } />
                        }
                    }
                } />
            );
        }
    }
}

export default ProtectedRoute;