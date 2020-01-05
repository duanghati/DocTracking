import Axios from 'axios';

const UNPROTECTED_PATHS=[
    "loginUser"
]
const isUnprotectedPath = (url)=>{
    for(let path of UNPROTECTED_PATHS){
        if(url.include(path)){
            return true
        }
        return false
    }
}
Axios.interceptors.request.use(
    async config =>{
        if (isUnprotectedPath(config.url)){
            return config
        }
        let token = localStorage.getItem("ACCESS_TOKEN")
        config.headers["Authorization"]=`Bearer ${token}`
        return config
    },
    async error =>{
        throw error;
    }

    
)


export default Axios;