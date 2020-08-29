<template>
  <div v-if="currentParticipant" class="container">
    <h4>Participant Detail (edit mode)</h4>
    <div v-if="!submitted" class="notification">
      <label class="subtitle" for="name">Name</label>
      <div class="field">
        <div class="control">
          <input class="input is-primary" type="text" placeholder="Primary input" id="name" required v-model="currentParticipant.name" name="name">
        </div>
      </div>
      <label class="subtitle" for="manager_email_address">Manager Email Address</label>
      <div class="field">
        <div class="control">
          <input class="input is-danger" type="email" placeholder="Email input" value="hello@" id="manager_email_address" required v-model="currentParticipant.manager_email_address" name="manager_email_address">
        </div>
      </div>
      <label class="subtitle" for="type_of_participant">Type of participant</label>
      <div class="control">
        <div class="select">
          <select class="form-control" id="type_of_participant" required v-model="currentParticipant.type_of_participant" name="type_of_participant">
            <option>BAND</option>
            <option>CARRIAGE</option>
          </select>
        </div>
      </div>
      <label class="subtitle" for="foundation_date">Foundation date</label>
      <div class="field">
        <div class="control">
          <input class="input is-primary" type="text" placeholder="Primary input" id="foundation_date" required v-model="currentParticipant.foundation_date" name="foundation_date">
        </div>
      </div>
    </div>
    <div class="control">
        <button class="button is-primary" @click="updateParticipant">Update</button>
      </div>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Participant...</p>
  </div>
</template>

<script>
import userService from '../services/user.service'

export default {
  name: 'participant',
  data () {
    return {
      currentParticipant: null,
      message: ''
    }
  },
  methods: {
    getParticipant (id) {
      userService.getParticipantByDetail(id)
        .then(response => {
          this.currentParticipant = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    updateParticipant (id, data) {
      userService.updateParticipant(this.currentParticipant.id, this.currentParticipant)
        .then(response => {
          console.log(response.data)
          this.message = 'The participant was updated successfully!'
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
