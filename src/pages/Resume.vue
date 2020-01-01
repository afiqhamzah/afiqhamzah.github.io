
<template>
  <div class="is-hidden-touch">
    <layout :target="target">
      <div class="container is-fluid target_pdf">
        <main-info />
        <education />
        <employment />
        <skill />
      </div>
    </layout>
  </div>
</template>

<script>
import layout from "~/layouts/Default.vue";
import mainInfo from "~/components/resume/MainInfo.vue";
import education from "~/components/resume/Education.vue";
import employment from "~/components/resume/Employment.vue";
import skill from "~/components/resume/Skill.vue";

export default {
  components: {
    layout,
    mainInfo,
    education,
    employment,
    skill,
  },

  data() {
    return {
      target: "target_pdf"
    };
  }

};
</script>

<style scoped>
</style>
