import axios from 'axios';

export default axios.create({
    baseURL: 'https://66b4-2001-818-ebc0-ad00-c4ca-3ddc-a3be-31.ngrok-free.app/', 
    headers: {"ngrok-skip-browser-warning": "true",
            "Access-Control-Allow-Origin": "*"}
});