import React from 'react';

class ErrorPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            statusCode : this.props.errorCode
        }
    }

    setErrorText(statusCode){
        let errorText = "Error " + statusCode
        if (statusCode === '404'){
            errorText += " . Not Found."
        }else if (statusCode === '403'){
            errorText += " Forbidden."
        }else if (statusCode === '503'){
            errorText += " Service Unavailable."
        }

        return(
            <div>
                <h2>{errorText}</h2>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.setErrorText(this.props.errorCode)}
            </div>
        )
    }
}

export default ErrorPage