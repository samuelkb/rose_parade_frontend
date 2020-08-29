<template>
  <div class="container">
    <div class="notification">
      <label class="subtitle" for="username">Username</label>
      <div class="field">
        <div class="control">
          <input
            class="input is-primary"
            type="text"
            placeholder="Username input"
            id="name"
            required
            v-model="user.username"
            name="username"
          />
        </div>
      </div>
      <label class="subtitle" for="password">Password</label>
      <div class="field">
        <div class="control">
          <input
            class="input is-danger"
            type="password"
            placeholder="Password input"
            value="***"
            id="password"
            required
            v-model="user.password"
            name="password"
          />
        </div>
      </div>
      <div class="field">
        <p class="control">
          <button @click="handleLogin" class="button is-success">Login</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../models/user'

export default {
  name: 'Login',
  data () {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    }
  },
  created () {
    if (this.loggedIn) {
      this.$router.push('/participants')
    }
  },
  methods: {
    handleLogin () {
      this.loading = true
      this.$validator.validateAll().then((isValid) => {
        if (!isValid) {
          this.loading = false
          return
        }

        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/participants')
            },
            (error) => {
              this.loading = false
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString() || console.log(error)
            }
          )
        }
      })
    }
  }
}
</script>
