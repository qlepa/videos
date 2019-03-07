import axios from 'axios';

const KEY = 'AIzaSyBeOXtMgzuDoROdxIa9WX6HlcgDrl2upFQ';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
    
});