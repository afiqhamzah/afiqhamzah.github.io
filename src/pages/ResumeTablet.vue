
<template >
  <div class="is-hidden-desktop is-hidden-mobile">
    <layout :target="target">
      <div class="container is-fluid target_pdf">
        <main-info-tablet />
        <education-tablet />
        <employment-tablet/>
        <skill-tablet />
      </div>
    </layout>
  </div>
</template>

<script>
import layout from "~/layouts/Default.vue";
import mainInfoTablet from "~/components/resume/MainInfoTablet.vue";
import educationTablet from "~/components/resume/EducationTablet.vue";
import employmentTablet from "~/components/resume/EmploymentTablet.vue";
import skillTablet from "~/components/resume/SkillTablet.vue";

export default {
  components: {
    layout,
    mainInfoTablet,
    educationTablet,
    employmentTablet,
    skillTablet,
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
