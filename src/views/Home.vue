<template>
  <div class="home">
    <h1 v-if="activeUser">Welcome {{activeUser.name}}</h1>
    <div class="form-list">
      <div v-for="movie in allMovies" :key="movie" class="form-item">{{movie.title}}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
  },

  methods: {
    ...mapActions('movies', ['getAllMovies'])
  },

  computed: {
    ...mapGetters('movies', ['allMovies']),
    ...mapGetters('auth', ['activeUser' ])
  },  

  created(){
    this.getAllMovies()
  }
}
</script>
