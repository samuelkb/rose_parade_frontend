<template>
  <div class="container">
    <div v-if="!submitted" class="notification">
      <label class="subtitle" for="name">Name</label>
      <div class="field">
        <div class="control">
          <input class="input is-primary" type="text" placeholder="Primary input" id="name" required v-model="participant.name" name="name">
        </div>
      </div>
      <label class="subtitle" for="manager_email_address">Manager Email Address</label>
      <div class="field">
        <div class="control">
          <input class="input is-danger" type="email" placeholder="Email input" value="hello@" id="manager_email_address" required v-model="participant.manager_email_address" name="manager_email_address">
        </div>
      </div>
      <label class="subtitle" for="type_of_participant">Type of participant</label>
      <div class="control">
        <div class="select">
          <select class="form-control" id="type_of_participant" required v-model="participant.type_of_participant" name="type_of_participant">
            <option>BAND</option>
            <option>CARRIAGE</option>
          </select>
        </div>
      </div>
      <label class="subtitle" for="foundation_date">Foundation date</label>
      <div class="field">
        <div class="control">
          <input class="input is-primary" type="text" placeholder="Primary input" id="foundation_date" required v-model="participant.foundation_date" name="foundation_date">
        </div>
      </div>
      <div class="control">
        <button class="button is-primary" @click="saveParticipant">Submit</button>
      </div>
    </div>

    <div v-else>
      <h4 class="title">You submitted successfully!</h4>
      <button @click="newParticipant">Add</button>
    </div>
  </div>
</template>

<script>
import ParticipantDataService from '../services/ParticipantDataService'

export default {
  name: 'add-participant',
  data () {
    return {
      participant: {
        id: null,
        name: '',
        manager_email_address: '',
        type_of_participant: 'BAND',
        foundation_date: '2020-08-15T19:07:49.463755-05:00',
        order: '4'
      },
      submitted: false
    }
  },
  methods: {
    saveParticipant () {
      var data = {
        name: this.participant.name,
        manager_email_address: this.participant.manager_email_address,
        type_of_participant: this.participant.type_of_participant,
        foundation_date: this.participant.foundation_date,
        order: this.participant.order
      }

      ParticipantDataService.create(data)
        .then(response => {
          this.participant.id = response.data.id
          console.log(response.data)
          this.submitted = true
        })
        .catch(e => {
          console.log(e)
        })
    },

    newParticipant () {
      this.submitted = false
      this.participant = {}
    }
  }
}
</script>
