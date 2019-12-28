
<template>
  <section class="section">
    <div class="columns">
      <div class="column is-one-third has-text-left">{{mainInfo.address}}</div>
      <div class="column has-text-right">{{mainInfo.phone_no}}</div>
    </div>
    <div class="columns has-text-centered">
      <div class="column">
        <span class="title">{{ mainInfo.name}}</span>
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-left">{{mainInfo.email}}</div>
      <div class="column has-text-right">{{mainInfo.github}}</div>
    </div>
  </section>
</template>

<script>
import data from "~/data/resume/MainInfo_data.json";

export default {
  data() {
    return {
      mainInfo: data
    };
  }
};
</script>

<style scoped>
</style>
