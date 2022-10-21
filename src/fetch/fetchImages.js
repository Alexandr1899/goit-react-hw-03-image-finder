import axios from "axios"
const key = "29882104-e2c403259a5fc7d82e3c160ea"

export function fetchImages(query, page) {
    return axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
}
