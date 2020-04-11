import axios from 'axios'
import config from '../constants/config'

const service = axios.create({
  baseURL: config.baseURL,
})

export default service
