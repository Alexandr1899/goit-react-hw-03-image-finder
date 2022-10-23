import { Component } from "react";
import { Form, FormButton, Input } from "./Searchbar.styled";
import { BsSearch } from "react-icons/bs";
import PropTypes from 'prop-types';

export class SearchForm extends Component {
    render() {
        return (
            <Form onSubmit={this.props.onSubmit}>
                <FormButton type="submit">
                    <BsSearch/>
                </FormButton>
                <Input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="query" 
                />
            </Form>
        )
    }
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func
}