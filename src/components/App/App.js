import { Loader } from "components/Loader/Loader";
import { fetchImages } from "fetch/fetchImages";
import { Component } from "react";
import css from "../modal/Modal.module.css"


export class AppBox extends Component {
    state = {
        query: "",
        page: 1,
        pictures: [],
        showModal: false,
        modalSrc: "",
        status: "idle",
        error: null
    }
    componentDidUpdate(_, prevState) {
        if (prevState.query !== this.state.query) {
            this.setState({status:"pending"})
        }
        if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
            fetchImages(this.state.query, this.state.page)
                .then(response => {
                    this.setState({status: "resolved"})
                    const results = response.data.hits
                    this.setState({ pictures: [...this.state.pictures, ...results] })
                }).catch(error => {
                this.setState({error, status: "rejected"})
            })
        }
    }

    submitInfo = (evt) => {
        evt.preventDefault()
        this.setState({query:evt.target.elements.query.value, page: 1, pictures: []})
    }

    loadMore = (evt) => {
        evt.preventDefault()
        this.setState({page:this.state.page+1})
    }

    toggleModal = (evt) => {
        this.setState(({ showModal }) => ({showModal:!showModal}))
    }

    openModalImage = (evt) => {
        evt.preventDefault()
        this.toggleModal()
        this.setState({modalSrc:evt.target.dataset.src})
    }
    
    render() {
        return (
            <div>
                <header class="searchbar">
                    <form class="form" onSubmit={this.submitInfo}>
                        <button type="submit" class="button">
                            <span class="button-label">Search</span>
                        </button>
                        <input
                        class="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="query" 
                        />
                    </form>
                </header>
                {this.state.status === "pending" && 
                <Loader/>
                }
                {this.state.status === "resolved" &&
                    <>
                    <ul>
                    {this.state.pictures.map(picture => {
                        return (
                            <li key={picture.id}>
                                <img src={picture.webformatURL} alt={this.state.query} onClick={this.openModalImage} data-src={picture.largeImageURL} />
                            </li>
                        )
                    })}
                    </ul>
                    {this.state.pictures.length !== 0 && <button type="button" onClick={this.loadMore}>Load more</button>}
                    </>
                }
                
                
                {this.state.showModal &&
                    <div className={css.backdrop}>
                        <div className={css.modal}>
                            <img src={this.state.modalSrc} alt={this.state.query} width="1000" height="auto"/>
                        </div>
                    </div>
                }
                
            </div>
        )
    }
}