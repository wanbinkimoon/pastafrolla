import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectHello} from '../actions/index'


class HelloList extends Component {

    renderList() {
        return this.props.hello.map((hello) => {
            return (
                <li
                    key={hello.id}
                    onClick={() => this.props.selectHello(hello)}
                >
                    {hello.text}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

function mapStateToProps(state) {
    return {
        hello: state.hello
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectHello: selectHello}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(HelloList);
