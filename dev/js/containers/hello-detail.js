import React, {Component} from 'react';
import {connect} from 'react-redux';

class HelloDetail extends Component {
    render() {
        if (!this.props.hello) {
            return (<div>Select a hello message...</div>);
        }
        return (
            <div>
                <h2>{this.props.hello.text}</h2>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        hello: state.activeHello
    };
}

export default connect(mapStateToProps)(HelloDetail);
