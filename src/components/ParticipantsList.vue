<template>
  <div class="list row">
    <div class="container">
      <h4 class="title">Participants List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(participant, index) in participants"
          :key="index"
          @click="setActiveParticipant(participant, index)"
        >
          {{ participant.name }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentParticipant">
        <h4>Participant</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentParticipant.name }}
        </div>
        <div>
          <label><strong>Manager email address:</strong></label> {{ currentParticipant.manager_email_address }}
        </div>
        <div>
          <label><strong>Tipo de participante:</strong></label> {{ currentParticipant.type_of_participant ? "Band" : "Carriage" }}
        </div>
        <div>
          <label><strong>Fecha de fundacion:</strong></label> {{ currentParticipant.foundation_date }}
        </div>

        <a class="badge badge-warning"
          :href="'/participants/' + currentParticipant.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Participant...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ParticipantDataService from '../services/ParticipantDataService'

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
      ParticipantDataService.getAll()
        .then(response => {
          this.participants = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },

    refreshList () {
      this.retrieveParticipants()
      this.currentParticipant = null
      this.currentIndex = -1
    },

    setActiveParticipant (participant, index) {
      this.currentParticipant = participant
      this.currentIndex = index
    }
  },
  mounted () {
    this.retrieveParticipants()
  }
}

</script>
