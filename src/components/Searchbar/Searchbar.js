import { Component } from "react";
import { Header } from "./Searchbar.styled";
import PropTypes from 'prop-types';

export class Searchbar extends Component {
    render() {
        return (
            <Header>
                {this.props.children}
            </Header>
        )
    }
}

Searchbar.propTypes = {
    children: PropTypes.element
}