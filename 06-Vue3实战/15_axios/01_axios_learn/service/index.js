// export default function resquest() {

// }
import axios from "axios"

class HYReqeust {
    request(config) {
        return axios.create(config)
    }
}

export default new HYReqeust()