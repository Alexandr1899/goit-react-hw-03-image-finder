import { Component } from "react";
import { createPortal } from "react-dom";
import { ModalBox, ModalField } from "./Modal.styled";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector("#modal-root")

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.clickEscape)
        window.addEventListener("click", this.clickBackdrop)
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.clickEscape)
        window.removeEventListener("click", this.clickBackdrop)
    }

    clickEscape = (evt) => {
        evt.preventDefault()
        if (evt.code === "Escape") {
            this.props.closeModal()
        }
    }
    clickBackdrop = (evt) => {
        evt.preventDefault()
        if (evt.target === document.querySelector("#modal-root > div")) {
            this.props.closeModal()
        }
    }
    render() {
        return createPortal(
            <ModalBox>
                <ModalField>
                    {this.props.children}
                </ModalField>
            </ModalBox>, modalRoot
        )
    }
}

Modal.propTypes = {
    children: PropTypes.element,
    closeModal: PropTypes.func
}