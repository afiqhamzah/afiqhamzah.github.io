
<template>
  <div class="container is-fluid">
    <main-info />
    <education />
    <employment />
    <skill />
  </div>
</template>

<script>

import mainInfo from "~/components/resume/MainInfo.vue";
import education from "~/components/resume/Education.vue";
import employment from "~/components/resume/Employment.vue";
import skill from "~/components/resume/Skill.vue";

export default {
    components : {
        mainInfo,
        education,
        employment,
        skill,
    }
};

</script>

<style scoped>
</style>
