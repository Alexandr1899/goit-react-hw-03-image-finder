import { Component } from "react";
import { LoadMoreBTN } from "./Button.styled";
import PropTypes from 'prop-types';

export class Button extends Component {
    render() {
        return (
            <LoadMoreBTN type="button" onClick={this.props.loadMore}>Load more</LoadMoreBTN>
        )
    }
}

Button.propTypes = {
    loadMore: PropTypes.func
}