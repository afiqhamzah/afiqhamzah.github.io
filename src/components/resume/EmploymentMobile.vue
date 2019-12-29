
<template>
  <section class="section">
    <h1 class="is-uppercase has-text-weight-bold">employment</h1>
    <hr />

    <div v-for="employment in employments" :key="employment.id">
      <div class="columns is-mobile">
        <div class="column has-text-weight-bold has-text-left">{{ employment.workplace }}</div>
        <div class="column has-text-weight-bold has-text-right">{{ employment.employment_period }}</div>
      </div>

      <div class="content">
        <ul>
          <li>
            Position as
            <span class="has-text-weight-bold">{{ employment.position }}</span>
          </li>
          <li v-for="detail in employment.details">{{ detail }}</li>
          <li>
            <span class="underlined has-text-weight-bold">Leverage knowledge</span>
            {{ employment.leveraged_knowledge}}
          </li>
        </ul>
        <br />
        <br />
      </div>
    </div>
  </section>
</template>

<script>
import data from "~/data/resume/Employment_data.json";

export default {
  data() {
    return {
      employments: data
    };
  }
};
</script>

<style scoped>
.underlined {
  text-decoration: underline;
}
</style>
