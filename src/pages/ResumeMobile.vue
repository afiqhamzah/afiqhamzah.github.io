
<template >
  <div class="is-hidden-desktop is-hidden-tablet">
    <layout :target="target">
      <div class="container is-fluid target_pdf">
        <main-info-mobile />
        <education-mobile />
        <employment-mobile/>
        <skill-mobile />
      </div>
    </layout>
  </div>
</template>

<script>
import layout from "~/layouts/Default.vue";
import mainInfoMobile from "~/components/resume/MainInfoMobile.vue";
import educationMobile from "~/components/resume/EducationMobile.vue";
import employmentMobile from "~/components/resume/EmploymentMobile.vue";
import skillMobile from "~/components/resume/SkillMobile.vue";

export default {
  components: {
    layout,
    mainInfoMobile,
    educationMobile,
    employmentMobile,
    skillMobile,
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
