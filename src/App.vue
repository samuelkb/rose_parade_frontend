<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/add">
      <img src="./assets/rosaicon.png">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a v-if="currentUser" class="navbar-item" href="/participants">Participants</a>

      <a class="navbar-item" href="/add">Add</a>
    </div>

    <div v-if="!currentUser" class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" href="/login">
            <strong>Log in</strong>
          </a>
        </div>
      </div>
    </div>
    <div v-if="currentUser" class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" href @click.prevent="logOut">
            <strong>Log Out</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
<div>
  <router-view />
</div>
<footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Rose Parade</strong> by <a href="https://github.com/samuelkb">Samuelkb</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
    </p>
  </div>
</footer>
</div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    }
  },
  methods: {
    logOut () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    }
  }
}
</script>
