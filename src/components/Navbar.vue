<template>
<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  
  <div class="navbar-brand is-hidden-desktop">
        <a class="navbar-item has-text-light" href="https://afiqhamzah.github.io/">
          Afiq Hamzah's Page
        </a>
         <a class="navbar-item nav-right">
            <pdf-exporter
                :target="target"
            ></pdf-exporter>
        </a>     
  </div>

  <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item has-text-light" href="https://afiqhamzah.github.io/">
          Afiq Hamzah's Page
        </a>
      </div>
  </div>
  
  <div class="navbar-menu" >
      <div class="navbar-end">
         <a class="navbar-item">
            <pdf-exporter
                :target="target"
            ></pdf-exporter>
        </a>     
      </div>
  </div>
</nav>
</template>

<script>
import pdfExporter from "~/components/utility/PdfExporter.vue";

export default {
  
  props: {
    target: {
      type: String,
      default:""
    },
  },

  components: {
     pdfExporter
  },

};
</script>

<style scoped>
.navbar-brand .navbar-item.nav-right {
  margin-right: 0;
  margin-left: auto;
  padding-right: 12px;
}
</style>
