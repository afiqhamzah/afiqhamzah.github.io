
<template>
  <section class="section">
    <div class="columns is-multiline">
      <div class="column has-text-centered is-full">
        <span class="title">{{ mainInfo.name}}</span>
      </div>
      <div class="column is-full has-text-centered">{{mainInfo.address}}</div>
      <div class="column is-full has-text-centered">
        <a :href="`tel:${mainInfo.phone_no}`">
            <b-icon icon="phone" size="is-small"/>
            {{mainInfo.phone_no}}
        </a>
      </div>
      <div class="column is-full has-text-centered">
        <a :href="`mailto:${mainInfo.email}`">
            <b-icon icon="email" size="is-small"/>
            {{mainInfo.email}}
        </a>
      </div>
      <div class="column is-full has-text-centered">
        <a :href="mainInfo.github">
            <b-icon icon="face" size="is-small"/>
            {{mainInfo.github}}
        </a>
      </div>
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
