
<template>
  <section class="section">
    <div class="columns">
      <div class="column is-one-quarter has-text-left">{{mainInfo.address}}</div>
      <div class="column has-text-right">{{mainInfo.phone_no}}</div>
    </div>
    <div class="has-text-centered">
        <span class="title">{{ mainInfo.name}}</span>
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
