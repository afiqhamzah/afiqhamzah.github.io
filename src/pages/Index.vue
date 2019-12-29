<template>
    <div>
        <Resume/>
        <Resume-Tablet/>
        <Resume-Mobile/>
    </div>
</template>

<script>
import UnderConstruction from '~/pages/UnderConstruction.vue'
import Demo from '~/pages/Demo.vue'
import Resume from '~/pages/Resume.vue'
import ResumeTablet from '~/pages/ResumeTablet.vue'
import ResumeMobile from '~/pages/ResumeMobile.vue'
export default {
  components: {
    Demo,
    UnderConstruction,
    Resume,
    ResumeTablet,
    ResumeMobile,
  }
}
</script>

<style>
</style>
