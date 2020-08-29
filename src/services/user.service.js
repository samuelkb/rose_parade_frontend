import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://127.0.0.1:8000/api/'

class UserService {
  getPublicContent () {
    return axios.get(API_URL + 'participants/join')
  }

  getAdminBoard () {
    return axios.get(API_URL + 'participants', { headers: authHeader() })
  }

  getParticipantByDetail (id) {
    return axios.get(API_URL + 'participants/' + id, { headers: authHeader() })
  }

  updateParticipant (id, data) {
    return axios.post(API_URL + 'participants/' + id, data, { headers: authHeader() })
  }
}

export default new UserService()
