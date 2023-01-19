<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" >Navbar</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/movie" class="nav-link">Movie</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tutorial
              </a>
              <ul class="dropdown-menu">
                <li><router-link to="/tutorial/0" class="dropdown-item">00 Variable</router-link></li>
                <li><router-link to="/tutorial/1" class="dropdown-item">01 Conditional</router-link></li>
                <li><router-link to="/tutorial/2" class="dropdown-item">02 Looping</router-link></li>
                <li><router-link to="/tutorial/3" class="dropdown-item">03 Components</router-link></li>
                <li><router-link to="/tutorial/4" class="dropdown-item">04 Lifecycle</router-link></li>
                <li><router-link to="/tutorial/5" class="dropdown-item">05 Computed</router-link></li>
                <li><router-link to="/tutorial/6" class="dropdown-item">06 Watch</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
  export default {
    mounted() {
      //  [App.vue specific] When App.vue is finish loading finish the progress bar
      this.$Progress.finish();
    },
    created() {
      //  [App.vue specific] When App.vue is first loaded start the progress bar
      this.$Progress.start();
      //  hook the progress bar to start before we move router-view
      this.$router.beforeEach((to, from, next) => {
        //  does the page we want to go to have a meta.progress object
        if (to.meta.progress !== undefined) {
          let meta = to.meta.progress;
          // parse meta tags
          this.$Progress.parseMeta(meta);
        }
        //  start the progress bar
        this.$Progress.start();
        //  continue to next page
        next();
      });
      //  hook the progress bar to finish after we've finished moving router-view
      this.$router.afterEach((to, from) => {
        //  finish the progress bar
        this.$Progress.finish();
      });
    },
  };
</script>