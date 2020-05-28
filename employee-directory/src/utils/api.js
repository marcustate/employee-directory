import axios from "axios";

const BASEURL = "https://randomuser.me/api/?page=3&results=10&seed=abc";

export default {
    search: function() {
        return axios.get(BASEURL);
    }
}