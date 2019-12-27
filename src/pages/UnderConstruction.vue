<template>
  <div class="hero is-fullheight is-light is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title huge">{{ message }}</h1>
        <h2 class="subtitle huge">
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
 .huge {
     font-size: 400%;
 }
</style>
