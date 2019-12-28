
<template>
  <section class="section">
    <div class="columns">
      <div class="column is-one-third has-text-left">{{mainInfo.address}}</div>
      <div class="column has-text-right"><a :href="`tel:${mainInfo.phone_no}`">{{mainInfo.phone_no}}</a></div>
    </div>
    <div class="columns has-text-centered">
      <div class="column">
        <span class="title">{{ mainInfo.name}}</span>
      </div>
    </div>
    <div class="columns">
        <div class="column has-text-left"><a :href="`mailto:${mainInfo.email}`">{{mainInfo.email}}</a></div>
        <div class="column has-text-right"><a :href="mainInfo.github">{{mainInfo.github}}</a></div>
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
