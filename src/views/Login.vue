<template>
  <div class="container">
      <h1 class="card-title text-center">Login</h1>
    <div class="card login-form">
      <div class="card-body">
        <div class="card-text">
    <form @submit.prevent="onSubmit">
<div class="mb-3">
  <label for="email" class="form-label">Email address</label>
  <input v-model="credentials.email" type="email" class="form-control" id="email" placeholder="email">
</div>
<div class="mb-3">
  <label for="password" class="form-label">Password</label>
  <input v-model="credentials.password" type="password" class="form-control" id="password" placeholder="password">
</div>
<button type="submit" class="btn btn-primary">Submit</button>
          </form> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return{
    credentials: {
      email: "",
      password: "",
      }
    }
  },

  computed: {
    ...mapGetters([

    ])
  },
  
  methods: {
    async onSubmit() {
      await this.$store.dispatch('auth/login', this.credentials)
      this.$router.push('/')
      }
  },

  created(){
    console.log(this.$store)
    }
}

</script>

<style>

</style>
