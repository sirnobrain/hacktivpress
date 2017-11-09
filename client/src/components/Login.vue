<template>
  <div id="login">
    <md-whiteframe md-elevation="2">
      <h2>Login</h2>
      <form>

        <md-input-container>
          <label>Username</label>
          <md-input v-model="username"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Password</label>
          <md-input v-model="password"></md-input>
        </md-input-container>

      </form>

      <md-button class="md-raised md-primary" @click="login">Login</md-button>
    </md-whiteframe>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      const user = { username: this.username, password: this.password }

      this.$store.dispatch('login', user)
      .then(() => {
        console.log('Login', user)
        this.$router.push('/')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
}
.md-whiteframe {
  width: 30%;
  padding: 64px 32px;
}

.md-button {
  margin-top: 32px;
  width: 100%;
}
</style>
