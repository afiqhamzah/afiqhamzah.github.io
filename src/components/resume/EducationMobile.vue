
<template>
  <section class="section">
    <h1 class="is-uppercase has-text-weight-bold">education</h1>
    <hr>
    <div class="columns is-mobile">
      <div class="column has-text-weight-bold has-text-left">{{ education.university_name }}</div>
      <div class="column has-text-weight-bold has-text-right">{{ education.university_period }}</div>
    </div>
    <div>
        <span class="has-text-weight-bold">Education Major: </span>{{ education.major}}
    </div>
    <div>
        <span class="has-text-weight-bold">Education Coursework: </span>{{ education.coursework}}
    </div>
    </div>
  </section>
</template>

<script>
import data from "~/data/resume/Education_data.json";

export default {
  data() {
    return {
      education: data
    };
  }
};
</script>

<style scoped>
</style>
