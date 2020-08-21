import http from '../http-common'

class ParticipantDataService {
  getAll () {
    return http.get('/participants')
  }

  create (data) {
    return http.post('/participants/join', data)
  }
}

export default new ParticipantDataService()
