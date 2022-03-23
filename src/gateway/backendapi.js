import axios from 'axios'

export default axios.create({
    // baseURL: 'https://ecofaith.azurewebsites.net/', //local
    // baseURL: 'https://churchplusv3coreapi.azurewebsites.net/',
    baseURL: 'https://demoapi.remis.ng/',
    // baseURL: 'https://14b8-129-56-60-247.ngrok.io',
    
    // baseURL: 'https://unionfaith.azurewebsites.net/',
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
    }
})