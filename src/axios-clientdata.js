import axios from "axios";

const Instance = axios.create({
    baseURL:"https://clientinfo-bfb1b.firebaseio.com/"
})

export default Instance;