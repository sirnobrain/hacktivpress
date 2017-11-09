<template>
  <md-toolbar class="md-dense">
    
    <md-button @click="gotoHome">
      Hacktivpress
    </md-button>
    
    <span style="flex: 1"></span>

    <md-button v-show="!user.isLoggedIn" class="md-dense" @click="gotoLogin">
      Login
    </md-button>

    <md-button v-show="!user.isLoggedIn" class="md-raised" @click="gotoRegister">
      Register
    </md-button>

    <md-button v-show="user.isLoggedIn" class="md-raised md-dense" @click="logout">
      Logout
    </md-button>
  </md-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    gotoHome () {
      this.$router.push('/')
    },
    gotoLogin () {
      this.$router.push('/login')
    },
    gotoRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<style>

</style>
