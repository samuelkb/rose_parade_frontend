import http from '../http-common'

class ParticipantDataService {
  create (data) {
    return http.post('/participants/join', data)
  }
}

export default new ParticipantDataService()
