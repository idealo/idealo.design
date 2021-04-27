import { fetchUserInfo } from './data';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';


export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        constructor(props) {
            super(props)
            // this.handleOnKeyUp = this.handleOnKeyUp.bind(this)
            this.state = {
                isLoggedIn: false,
                userInfo: {},
            }
        }


        async componentDidMount() {
            /* window.document.addEventListener('keyup', this.handleOnKeyUp)*/
            const userInfo = await fetchUserInfo()
            this.setState({userInfo})
            this.checkAuthentication();
            const loggedIn = this.state.userInfo.status;
            if(loggedIn === 'LOGGED_IN'){
                this.state.isLoggedIn = true;
            }
        }

        checkAuthentication() {
            const { isLoggedIn, redirect } = this.props;
            if (!isLoggedIn) {
                redirect();
            }
        }


        render() {
            const loginErrorMessage = (
                <div>
                    Please login in order to view this part of the application.
                </div>
            );

            return (
                <div>
                    { this.props.isLoggedIn ? <Component {...this.props} /> : loginErrorMessage }
                </div>
            );
        }

    }
    const mapStateToProps = (state) => {
        return {
            isLoggedIn: state.isLoggedIn
        };
    };
    const mapDispatchToProps = dispatch => bindActionCreators({
        redirect: () => push('/signin')
    }, dispatch)

    AuthenticatedComponent.propTypes = {
        isAuthenticated: PropTypes.bool,
        redirect: PropTypes.func.isRequired
    };

    AuthenticatedComponent.propTypes = propTypes;

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(AuthenticatedComponent);

}


export default requireAuthentication;