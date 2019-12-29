
<template>
  <section class="section">
    <h1 class="is-uppercase has-text-weight-bold">skills</h1>
    <hr>
    
    <div>
        <span class="has-text-weight-bold">Proficient </span>{{ skill.proficient}}
    </div>
    <div>
        <span class="has-text-weight-bold">Familiar </span>{{ skill.familiar}}
    </div>
  </section>
</template>

<script>
import data from "~/data/resume/Skill_data.json";

export default {
  data() {
    return {
      skill: data
    };
  }
};
</script>

<style scoped>
</style>
