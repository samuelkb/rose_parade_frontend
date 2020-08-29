<template>
  <div class="container">
    <div>
      <h4 class="title has-text-centered">Participants List</h4>
    </div>
    <br>
    <div class="columns is-mobile is-centered">
      <div class="column is-5">
        <div class="list">
          <ul>
            <div class="list-item">
              <li><strong>Participant's name</strong></li>
              <li
              :class="{ active: index == currentIndex }"
              v-for="(participant, index) in participants"
              :key="index"
              @click="setActiveParticipant(participant, index)"
              >{{ participant.name }}</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div v-if="currentParticipant">
        <h2><strong>Participant</strong></h2>
        <div>
          <label>
            <strong>Name:</strong>
          </label>
          {{ currentParticipant.name }}
        </div>
        <div>
          <label>
            <strong>Manager email address:</strong>
          </label>
          {{ currentParticipant.manager_email_address }}
        </div>
        <div>
          <label>
            <strong>Tipo de participante:</strong>
          </label>
          {{ currentParticipant.type_of_participant ? "Band" : "Carriage" }}
        </div>
        <div>
          <label>
            <strong>Fecha de fundacion:</strong>
          </label>
          {{ currentParticipant.foundation_date }}
        </div>

        <a class="badge badge-warning" :href="'/participants/' + currentParticipant.id">Edit</a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Participant...</p>
      </div>
    </div>
  </div>
</template>

<script>
import userService from '../services/user.service'

export default {
  name: 'participants-list',
  data () {
    return {
      participants: [],
      currentParticipant: null,
      currentIndex: -1,
      title: ''
    }
  },
  methods: {
    retrieveParticipants () {
      userService
        .getAdminBoard()
        .then((response) => {
          this.participants = response.data
          console.log(response.data)
        })
        .catch((e) => {
          console.log(e)
        })
    },

    refreshList () {
      this.getAdminBoard()
      this.currentParticipant = null
      this.currentIndex = -1
    },

    setActiveParticipant (participant, index) {
      this.currentParticipant = participant
      this.currentIndex = index
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    }
  },
  mounted () {
    this.retrieveParticipants()
  }
}
</script>
