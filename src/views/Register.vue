<template>
  <div class="container">
      <h1>Register</h1>
  <div class="card">
    <div class="card-body">
      <div class="card-text">
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">name</label>
        <input
          v-model="registerForm.name"
          type="text"
          required
          class="form-control"
          id="name"
          aria-describedby="name"
        />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">email</label>
        <input
          v-model="registerForm.email"
          type="email"
          required
          class="form-control"
          id="email"
          aria-describedby="email"
        />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">password</label>
        <input
          v-model="registerForm.password"
          type="password"
          required
          class="form-control"
          id="password"
          aria-describedby="password"
        />

      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
      </div>
    </div>
  </div>
</template>

<script>
import authService from '../services/AuthService';
export default {

  data(){
    return{
      user:{},

      registerForm: {
        name: '',
        email: '',
        password: ''
      }
    }
  },

  methods:{
   async onSubmit(){
     const response = await authService.register(this.registerForm)
     this.user = response.user

    }
  }
}
</script>

<style>

</style>
