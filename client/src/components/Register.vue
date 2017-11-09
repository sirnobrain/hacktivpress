<template>
  <div id="register">
    <md-whiteframe md-elevation="2">
      <h2>Register</h2>
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
      <md-button class="md-raised md-primary" @click="register">Register</md-button>
    </md-whiteframe>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    register () {
      const user = { username: this.username, password: this.password }

      this.$store.dispatch('register', user)
      .then(() => {
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
#register {
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