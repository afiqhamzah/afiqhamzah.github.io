<template>
  <div class="hero is-fullheight is-dark is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-huge-title">{{ message }}</h1>
        <h2 class="subtitle is-huge-subtitle">
            👷‍♂️ 🛠️ 🚧 🚧  🛠️👷‍♀️
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Under Construction"
    };
  }
};
</script>

<style scoped>
 .is-huge-title {
     font-size: 400%;
 }
 .is-huge-subtitle {
     font-size: 300%;
 }
</style>
