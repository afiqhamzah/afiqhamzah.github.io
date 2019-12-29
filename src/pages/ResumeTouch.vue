
<template >
  <div class="is-hidden-desktop">
    <layout :target="target">
      <div class="container is-fluid" id="target_pdf">
        <main-info-touch />
        <education-touch />
        <employment-touch/>
        <skill-touch />
      </div>
    </layout>
  </div>
</template>

<script>
import layout from "~/layouts/Default.vue";
import mainInfoTouch from "~/components/resume/MainInfoTouch.vue";
import educationTouch from "~/components/resume/EducationTouch.vue";
import employmentTouch from "~/components/resume/EmploymentTouch.vue";
import skillTouch from "~/components/resume/SkillTouch.vue";

export default {
  components: {
    layout,
    mainInfoTouch,
    educationTouch,
    employmentTouch,
    skillTouch,
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
