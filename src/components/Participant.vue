<template>
  <div v-if="currentParticipant" class="edit-form">
    <h4>Tutorial</h4>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name"
          v-model="currentParticipant.name"
        />
      </div>
      <div class="form-group">
        <label for="manager_email_address">Manager email address</label>
        <input type="text" class="form-control" id="manager_email_address"
          v-model="currentParticipant.manager_email_address"
        />
      </div>

      <div class="form-group">
        <label><strong>Tipo de participante:</strong></label>
        {{ currentParticipant.type_of_participant ? "Band" : "Carriage" }}
      </div>
    </form>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Participant...</p>
  </div>
</template>

<script>
import ParticipantDataService from '../services/ParticipantDataService'

export default {
  name: 'participant',
  data () {
    return {
      currentParticipant: null,
      message: ''
    }
  },
  methods: {
    getTutorial (id) {
      ParticipantDataService.get(id)
        .then(response => {
          this.currentParticipant = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted () {
    this.message = ''
    this.getParticipant(this.$route.params.id)
  }
}
</script>
