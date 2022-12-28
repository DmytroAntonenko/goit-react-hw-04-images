import axios from 'axios';
const KEY = '30992606-4305b7e2b4564aba7b063f01d';

const BASE_URL = 'https://pixabay.com/api/';

async function getImages(query, page) {
    const response = await axios.get(`${BASE_URL}`, {
        params: {
            key: KEY,
            q: query,
            page,
            image_type: "photo",
            orientation: "horizontal",
            per_page: 12,
        }
    });
    return response.data.hits;
}

export default getImages;