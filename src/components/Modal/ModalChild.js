import { Component } from "react";
import { ModalImage } from "./Modal.styled";
import PropTypes from 'prop-types';

export class ModalChild extends Component {
    render() {
        return (
            <ModalImage src={this.props.modalSrc} alt={this.props.query}/>
        )
    }
}

ModalChild.propTypes = {
    modalSrc: PropTypes.string,
    query: PropTypes.string
}